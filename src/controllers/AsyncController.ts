import {Request,Response} from 'express';
import { getRepository,MoreThan } from 'typeorm';
import ClientesControllers from './ClientesControllers';
import CondicoesPagamentoController from './CondicoesPagamentoController';
import ProdutoControllers from './ProdutoControllers';
import DuplicReceberControllers from './DuplicReceberControllers';
import  moment from 'moment';

export default{

    async asyncClientes(request: Request,response: Response){
        const { lastPulledVersion } = request.query;    

        let dataFormatted = "";
        
        console.log(lastPulledVersion);

        if(lastPulledVersion != "0"){
          //console.log('entro aqui');
          const datalastpull = new Date(Number(lastPulledVersion));
         
          let formattedDate = (moment(datalastpull)).format('YYYY-MM-DD HH:mm:ss');
          
          dataFormatted = formattedDate;

        }else{
          //console.log('entro aqui 2');
          const datalastpull = new Date();
          let formattedDate = (moment(datalastpull)).format('YYYY-MM-DD');
           //console.log(formattedDate);
           dataFormatted = formattedDate+' 00:00:00';
        }
        

        //console.log("data formatada: "+dataFormatted);
        /*Dados de Cliente*/
        const updated = await ClientesControllers.ListaClienteAlterado(String(dataFormatted));
        const created = await ClientesControllers.ListaClientesCriado(String(dataFormatted));
        

        const clientes = {
            created,
            updated,
            deleted: [],
          }

          /*Dados de Produto*/
          const updateProduto  = await ProdutoControllers.ListaProdutoAlterado(String(dataFormatted));
          const createdProduto = await ProdutoControllers.ListaProdutoCriado(String(dataFormatted));

          const produtos = {
            created:createdProduto,
            updated:updateProduto,
            deleted: [],
          }

          /*
            Dados de condiçoes de pagamento 
          */

          const updateCondicoespagamento = await CondicoesPagamentoController.ListaProdutoAlterado(String(dataFormatted));
          const createCondicoespagamento = await CondicoesPagamentoController.ListaCondicoesPagamentoCriado(String(dataFormatted));

          const condicoes_pagamento = {
            created:createCondicoespagamento,
            updated:updateCondicoespagamento,
            deleted: [],
          }

          /**
            Dados de Duplictas a receber
          */
          const updateDuplicReceber = await DuplicReceberControllers.ListaDuplicReceberAlterado(String(dataFormatted));
          const createDuplicReceber = await DuplicReceberControllers.ListaDuplicReceberCriado(String(dataFormatted));

          const duplic_receber = {
            created:createDuplicReceber,
            updated:updateDuplicReceber,
            deleted: [],
          }

          return response.status(200).json({
            latestVersion: new Date().getTime(),
            changes: {
                clientes,
                produtos,
                condicoes_pagamento,
                duplic_receber
            }
          });

    },



}