import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Pedido from '../models/Pedido';
import { v4 as uuidV4 } from "uuid";
//import usuarios_view from '../Views/usuarios_view';
import * as Yup from 'yup';

export default{

    async Index(request: Request,response: Response){

    },
    async show(request: Request,response: Response){

    },
    async create(request: Request,response: Response){

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
                    cnpj_emp:item.cnpj_emp
               };

               await pedidoRepository.createQueryBuilder().insert().into(Pedido).values(data).execute();

            });

        }   
        
        return response.status(201).json({response:'teste'});
    }
}