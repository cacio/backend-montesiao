import { Request,Response } from 'express';
import { getRepository,MoreThan } from 'typeorm';
import * as Yup from 'yup';
import CondicoesPagamento from '../models/CondicoesPagamento';
import CondicoesPagamento_view from '../Views/CondicoesPagamento_view';

export default{
    async ListaProdutoAlterado(lastPulledVersion:String){
        const condicoespagamentoRepository = getRepository(CondicoesPagamento);

        const condicoesPagamentoAlterado = await condicoespagamentoRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at",{ lastPulledVersion }).getMany();

        return CondicoesPagamento_view.renderMany(condicoesPagamentoAlterado);
    },
    async ListaCondicoesPagamentoCriado(lastPulledVersion:String){
        const condicoespagamentoRepository = getRepository(CondicoesPagamento);
        
        const condicoesPagamentoCriado = await condicoespagamentoRepository.find({
            created_at: MoreThan(lastPulledVersion)      
          });

          return CondicoesPagamento_view.renderMany(condicoesPagamentoCriado);
    },

    async create(request: Request,response: Response){
        const { codigo,descricao,cnpj_emp } = request.body;

        const condicoesPagametoRepository = getRepository(CondicoesPagamento);

        const data = {
            codigo,
            descricao,
            cnpj_emp
        }

        const schema = Yup.object().shape({
            codigo:Yup.string().required("Informar ao menos o código interno!"),
            descricao:Yup.string().required("Informar uma descrição!"),
            cnpj_emp:Yup.string().required("Informar ao menos a forma de pagamento da sua empresa !"),
        });

        await schema.validate(data,{
            abortEarly:false,
        });

        const condicoes_pagamento = condicoesPagametoRepository.create(data);

        await condicoesPagametoRepository.save(condicoes_pagamento);

        return response.status(201).json(condicoes_pagamento);

    }
}