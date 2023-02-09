import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import usuarios_view from '../Views/usuarios_view';
import * as Yup from 'yup';

export default{

    async Index(request: Request,response: Response){
        const usuarioRepository = getRepository(Usuario);
        const usuario = await usuarioRepository.find();

        return response.json(usuarios_view.renderMany(usuario));
    },
    
    async show(request: Request,response: Response){
        const { id } =request.params;

        const usuarioRepository = getRepository(Usuario);
        const usuario = await usuarioRepository.findOneOrFail(id);

        return response.json(usuarios_view.render(usuario));
    },    

    async create(request: Request,response: Response){
        const { name,email,passwd,photo,cnpj_emp,cod_repre } = request.body;

        const usuarioRepository = getRepository(Usuario);

        const data = {
            name,
            email,
            passwd,
            photo,
            cnpj_emp,
            cod_repre
        }

        const schema = Yup.object().shape({
            name:Yup.string().required("Informar um nome !"),
            email:Yup.string().required("Informar ao mesnos um email!").email("E-mail invalido!"),
            passwd:Yup.string().required("Digite uma senha!"),
            photo:Yup.string(),
            cnpj_emp:Yup.string().required("Informar um Cnpj de sua empresa!"),
            cod_repre:Yup.string().required("Informar o código do representante com a empresa !")
        });

        await schema.validate(data,{
            abortEarly:false,
        })

        const user = await usuarioRepository.findOne({where:{email}});

        if(user){
            return response.sendStatus(409);            
        }

        const usuario = usuarioRepository.create(data);

        await usuarioRepository.save(usuario);

        return response.status(201).json(usuario);
    },
    async asyncupdate(request: Request,response: Response){
        const { id,user_id,name,email,passwd,photo,cnpj_emp,cod_repre } = request.body.updated[0];
       /* console.log("PUSH DO USUÁRIO")    
        console.log(request.body.updated[0]);*/

        const usuarioRepository = getRepository(Usuario);

        const data = {            
            name:name,
            photo:photo
        };

        const clientes = await usuarioRepository.createQueryBuilder().update(Usuario).set(
            data 
        ).where('id=:id',{id: user_id}).execute();

        return response.status(201).json(clientes);

    },
    async VrificaUsuarioCNPJ(request: Request,response: Response){
        const { cnpj_emp,cod_repre } = request.body;
           
        const usuarioRepository = getRepository(Usuario);

        const users = await usuarioRepository.findOne({where:{cod_repre,cnpj_emp}});
        
        if(users){
            return response.status(201).json({
                status:"error",
                message:"Representante ja exite na base de dados da empresa"
            });
        }

        return response.status(201).json({
            status:"sucesso",
            message:"Usuario não existe para essa empresa "+cnpj_emp+" "
        });

    }

};