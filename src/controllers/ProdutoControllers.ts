import { Request,Response } from 'express';
import { getRepository,MoreThan } from 'typeorm';
import Produtos from '../models/Produtos';
import produtos_view from '../Views/produtos_view';
import * as Yup from 'yup';

export default{
    async ListaProdutoAlterado(lastPulledVersion:String){
        const produtoRepository = getRepository(Produtos);

        const produtoAlterado = await produtoRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at",{ lastPulledVersion }).getMany();

        return produtos_view.renderMany(produtoAlterado);
    },
    async ListaProdutoCriado(lastPulledVersion:String){
        const produtoRepository = getRepository(Produtos);
        
        const produtoCriado = await produtoRepository.find({
            created_at: MoreThan(lastPulledVersion)      
          });

          return produtos_view.renderMany(produtoCriado);
    },
    async create(request: Request,response: Response){
        const { codigo,decricao,unidade,preco_venda,estoque_atual,pecas_estoque,peso_medio,preco_min,preco_max,idgrupo,foto,cnpj_emp }  = request.body;
        
        const produtoRepository = getRepository(Produtos);
        const data = {
            codigo,
            decricao,
            unidade,
            preco_venda,
            estoque_atual,
            pecas_estoque,
            peso_medio,
            preco_min,
            preco_max,
            idgrupo,
            foto,
            cnpj_emp
        }
        const schema = Yup.object().shape({
            codigo:Yup.string().required("Informar ao menos o código interno!"),
            decricao:Yup.string().required("Informar uma descrição do produto!"),
            unidade:Yup.string().required("Informar a unidade do produto"),
            preco_venda:Yup.string().required("Informar o preço de venda"),
            estoque_atual:Yup.string().required("Informar o estoque desse produto!"),
            peso_medio:Yup.string().required("Informar um peso medio!"),
            cnpj_emp:Yup.string().required("Informar o cnpj da empresa responsavel por esse produto"),
        });

        await schema.validate(data,{
            abortEarly:false,
        });

        const produtos = produtoRepository.create(data);

        await produtoRepository.save(produtos);

        return response.status(201).json(produtos);
    }

}