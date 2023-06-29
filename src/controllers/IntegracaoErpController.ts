import { Request,Response } from 'express';
import { getRepository,Index,MoreThan, Like } from 'typeorm';
import IntegracaoErp from '../models/IntegracaoErp';
import * as Yup from 'yup';
import * as socketio from 'socket.io';

export default{
   
   
    async create(request: Request,response: Response){
        //const { codigo,idpedido,idpederp,tpmovim,cnpj_emp }  = request.body;
         
        const data         = request.body;
        const { cnpj_emp } = request.params;

        const currentData : IntegracaoErp[] = data;
        
        const IntegracaoErpRepository = getRepository(IntegracaoErp);

        for(const element of currentData){

            const codigo = element.codigo;
            const idpedido = element.idpedido;
            const idpederp = element.idpederp;
            const tpmovim  = element.tpmovim;
            const cnpj_emp = element.cnpj_emp;            

            const IntegracaoCriado = await IntegracaoErpRepository.find({
                idpedido: idpedido
            });

            const data = {
                codigo,
                idpedido,
                idpederp,
                tpmovim,
                cnpj_emp
            }

            if(IntegracaoCriado.length == 0){
                const Integracao = IntegracaoErpRepository.create(data);

                await IntegracaoErpRepository.save(Integracao);                
            }

       
        }

        const io: socketio.Server = request.app.get('socketio');
        io.emit('pushErpCode',{
            pedido:currentData,
            cnpj_emp:cnpj_emp
        });

        return response.status(201).json(currentData);
       
       

        
    },
    

}