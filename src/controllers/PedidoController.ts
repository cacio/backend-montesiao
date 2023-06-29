import {Request,Response} from 'express';
import { IsNull, getRepository } from 'typeorm';
import Pedido from '../models/Pedido';
import PedidoDetalhe from '../models/PedidoDetalhe';
import { v4 as uuidV4 } from "uuid";
import * as socketio from 'socket.io';
import * as Yup from 'yup';

export default{

    async Index(request: Request,response: Response){

    },
    async show(request: Request,response: Response){

    },
   
      async create(request: Request, response: Response) {
        const created = request.body;
        const { cnpj_emp } = request.params;
        const createdPedido: Pedido[] = created;
      
        const pedidoRepository = getRepository(Pedido);
        //const pedidoDetalheRepository = getRepository(PedidoDetalhe);            
        
        try {

          for (const element of createdPedido) {

            if (!element.codigo_cliente) {              
              return response.status(200).json({
                status: "error",
                response: `Código cliente não vinculado!`,
                data: element
              });
            }
      
            const verificaseexiste = await pedidoRepository.findOne({
              where: {
                pedido_id: element.pedido_id
              }
            });
      
            if (!verificaseexiste) {
              const data = {
                pedido_id_despositivo: element.pedido_id,
                pedido_id: element.pedido_id,
                CODIGO_RETAGUARDA: element.CODIGO_RETAGUARDA,
                data_pedido: element.data_pedido,
                codigo_cliente: element.codigo_cliente,
                data_entrega: element.data_entrega,
                hora_pedido: element.hora_pedido,
                codigo_usuario: element.codigo_usuario,
                codigo_vendedor: element.codigo_vendedor,
                status: element.status,
                prazo1: element.prazo1,
                prazo2: element.prazo2,
                prazo3: element.prazo3,
                prazo4: element.prazo4,
                prazo5: element.prazo5,
                obs: element.obs,
                valor_desconto: element.valor_desconto,
                id_tabela_preco: element.id_tabela_preco,
                retirada: element.retirada,
                placa:element.placa,
                cnpj_emp: element.cnpj_emp
              };

              console.log(element.data_pedido);

              const pedido = pedidoRepository.create(data);
              await pedidoRepository.save(pedido);
            }
      
            const pedidoDetalhePromise:PedidoDetalhe[] = element.detalhe;
            //const pedidoDetalhe: PedidoDetalhe[] = await pedidoDetalhePromise;

            pedidoDetalhePromise.forEach(async(item:PedidoDetalhe) => {
                //console.log(item);
               
                const DataDetalhe = {
                    pedido_id_despositivo:item.id, 
                    pedido_id:item.pedido_id, 
                    qtd:item.qtd, 
                    preco:item.preco, 
                    cod_prod:item.cod_prod, 
                    pc:item.pc, 
                    desconto:0, 
                    obs:'', 
                    tipo_pc_qtd:"2", 
                    cnpj_emp:element.cnpj_emp
                }

                const pedidoDetalheRepository = getRepository(PedidoDetalhe);                
                const verificaseexitedetalhe  = await pedidoDetalheRepository.findOne({

                    where:{
                        pedido_id_despositivo:item.id
                    }
                });
                
                if(!verificaseexitedetalhe){
                    const detalhe = pedidoDetalheRepository.create(DataDetalhe);

                    await pedidoDetalheRepository.save(detalhe);
                }
                

            });
          
          }
      
      
          const io: socketio.Server = request.app.get("socketio");
          io.emit("newPedido", {
            pedido: createdPedido,
            cnpj_emp: cnpj_emp
          });
      
          return response.status(201).json({
            status: "success",
            response: `Pedidos Inseridos com sucesso!`,
            data: createdPedido
          });
        } catch (error) {          
          console.error(error);
          return response
            .status(500)
            .json({ status: "error", response: "Erro interno no servidor" });
        }
      },
    async AsyncCreate(request: Request,response: Response){
        const {created} = request.body;

        const createdPedido:[] = created;
        const pedidoRepository = getRepository(Pedido);

        if(createdPedido.length > 0){
           //await pedidoRepository.createQueryBuilder().insert().into(Pedido).values(createdPedido).execute();
            createdPedido.forEach(async (item:Pedido)=>{

               const data = {
                    id:uuidV4(), 
                    pedido_id:item.pedido_id, 
                    CODIGO_RETAGUARDA: item.CODIGO_RETAGUARDA, 
                    data_pedido:item.data_pedido, 
                    codigo_cliente:item.codigo_cliente, 
                    data_entrega:item.data_entrega, 
                    hora_pedido:item.hora_pedido, 
                    codigo_usuario:item.codigo_usuario, 
                    codigo_vendedor:item.codigo_vendedor, 
                    status:item.status, 
                    prazo1:item.prazo1, 
                    prazo2:item.prazo2, 
                    prazo3:item.prazo3, 
                    prazo4:item.prazo4, 
                    prazo5:item.prazo5, 
                    obs:item.obs, 
                    valor_desconto:item.valor_desconto, 
                    id_tabela_preco:item.id_tabela_preco, 
                    retirada:item.retirada,
                    placa:item.placa, 
                    cnpj_emp:item.cnpj_emp
               };

               await pedidoRepository.createQueryBuilder().insert().into(Pedido).values(data).execute();

            });

        }   
        
        return response.status(201).json({response:'teste'});
    },
    async HandllerPushPedidoRetaguarda(request: Request, response: Response) {
        const { cnpj_emp } = request.params;
      
        const pedidoRepository = getRepository(Pedido);
      
        const pedidos = await pedidoRepository
          .createQueryBuilder('pedido')
          .leftJoinAndSelect('integracao_erp', 'i', 'i.codigo = pedido.pedido_id')
          .where('pedido.cnpj_emp = :cnpj and i.id is null', { cnpj: cnpj_emp })
          .getMany();
      
       // const createdPedido: Array<{ pedido: Pedido, detalhe: Promise<PedidoDetalhe[]> }> = [];
        const createdPedido: Array<Pedido & { detalhe: PedidoDetalhe[] }> = [];
        for (const pedido of pedidos) {
          const pedidoDetalheRepository = getRepository(PedidoDetalhe);
          const detalhes = await pedidoDetalheRepository.find({
            where: {
                pedido_id: pedido.pedido_id,
            },
          });
                    
          createdPedido.push({
            ...pedido,
            detalhe: detalhes ? detalhes: [],
          });
        }
        
        return response.status(201).json({
            status: "success",
            response: `Pedidos Inseridos com sucesso!`,
            data: createdPedido
          });
       // console.log(createdPedido);
      }
}