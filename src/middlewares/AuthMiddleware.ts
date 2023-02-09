import {Request,Response,NextFunction} from 'express';
import  Jwt  from 'jsonwebtoken';

interface TokenPayload{
    id:string;
    iat:number;
    exp:number;
}

export default function AuthMiddleware(
    req:Request, res:Response,next:NextFunction
){


    const {authorization} = req.headers;

    if(!authorization){
        return res.sendStatus(401);
    }


    const token = authorization.replace('Bearer','').trim();

    try {
        
        const data = Jwt.verify(token,'Pr0d@5Iq');

        const {id} = data as TokenPayload;
        
        req.userId = id;

        return next();

    } catch (error) {
        return res.sendStatus(401);     
    }

}