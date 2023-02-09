import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,BeforeInsert,BeforeUpdate } from "typeorm";
import bcrypt from 'bcryptjs';
 
@Entity('usuarios')
export default class Usuario{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    passwd:string;

    @Column()
    photo:string;

    @Column()
    cnpj_emp:string;

    @Column()
    cod_repre:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.passwd = bcrypt.hashSync(this.passwd,8);
    }
}