import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import usuarios_view from '../Views/usuarios_view';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export default{

    async Authenticate(request: Request,response: Response){
        const { email,passwd} = request.body;

        const usuarioRepository = getRepository(Usuario);

        const data = {            
            email,
            passwd            
        }

        const schema = Yup.object().shape({            
            email:Yup.string().required().email(),
            passwd:Yup.string().required(),            
        });
        
        await schema.validate(data,{
            abortEarly:false,
        });



        const users = await usuarioRepository.findOne({where:{email}});

        if(!users){
            return response.status(500).json({
                status:"error",
                message:"Email or password incorret!"
            });
            //throw new Error("Email or password incorret!");            
        }


        const isValidPassword = await bcrypt.compare(passwd,users.passwd);

        if(!isValidPassword){
            return response.status(500).json({
                status:"error",
                message:"Email or password incorret!"
            });
            //throw new Error("Email or password incorret!");
        }


        const token = jwt.sign({id:users.id},'Pr0d@5Iq',{expiresIn:'1d'});
        const user = usuarios_view.render(users);

        return response.json({usuario:user,token});
       
    },
   
    
};