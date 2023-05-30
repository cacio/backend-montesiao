import { Request,Response } from 'express';
import { getRepository,Index,MoreThan, Like } from 'typeorm';
import TotalNotaEntrada from '../models/TotalNotaEntrada';

export default{
    async HandllercreateUpdate(request: Request,response: Response){
        const { tot_icmsst,vltotnota,numerosemana,cnpj_emp } = request.body;

        console.log(tot_icmsst,vltotnota,numerosemana,cnpj_emp);
        const data = {
            numerosemana, 
            tot_icmsst, 
            vltotnota, 
            cnpj_emp
        };

        const totalnotaRepositoey = getRepository(TotalNotaEntrada);

        const currentData = await totalnotaRepositoey.find(
            {
                where:[
                    {numerosemana:numerosemana,cnpj_emp:cnpj_emp},                    
                ]
            }
            );

            if(currentData.length == 0){
                
                const totalnotaentrada = totalnotaRepositoey.create(data);
                await totalnotaRepositoey.save(totalnotaentrada);

            }else{
                //console.log(currentData[0].id); 
                await totalnotaRepositoey.createQueryBuilder().update(TotalNotaEntrada).set(
                    data 
                ).where('id=:id',{id: currentData[0].id}).execute();
            }

            return response.status(201).json(data);

    },
    async handllerGetTotalNotaEntrada(request: Request,response: Response){
        const {numerosemana, cnpj_emp} = request.params;

        const totalnotaRepositoey = getRepository(TotalNotaEntrada);

        const currentData = await totalnotaRepositoey.find(
            {
                where:[
                    {numerosemana:numerosemana,cnpj_emp:cnpj_emp},                    
                ]
            }
        );

        return response.status(200).json(currentData);

    }
}