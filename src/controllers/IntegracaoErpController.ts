import { Request,Response } from 'express';
import { getRepository,Index,MoreThan, Like } from 'typeorm';
import IntegracaoErp from '../models/IntegracaoErp';
import * as Yup from 'yup';
import * as socketio from 'socket.io';

export default{
   
   
    async create(request: Request,response: Response){
        const { codigo,idpedido,idpederp,tpmovim,cnpj_emp }  = request.body;
        
                
        const IntegracaoErpRepository = getRepository(IntegracaoErp);
        
        const data = {
            codigo,
            idpedido,
            idpederp,
            tpmovim,
            cnpj_emp
        }

        const IntegracaoCriado = await IntegracaoErpRepository.find({
            idpedido: idpedido
        });

        if(IntegracaoCriado.length == 0){
            console.log('aqui');
            const Integracao = IntegracaoErpRepository.create(data);

            await IntegracaoErpRepository.save(Integracao);
            
            const io: socketio.Server = request.app.get('socketio');
            io.emit('pushErpCode',{
                pedido:Integracao,
                cnpj_emp:cnpj_emp
            });
      
            return response.status(201).json(Integracao);
        }else{
            console.log('aqui');
            const io: socketio.Server = request.app.get('socketio');
            io.emit('pushErpCode',{
                pedido:IntegracaoCriado,
                cnpj_emp:cnpj_emp
            });

            return response.status(201).json(IntegracaoCriado);
        }
       

        
    },
    

}