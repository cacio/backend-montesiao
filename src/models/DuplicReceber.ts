import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('duplic_receber')

export default class DuplicReceber{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    codigo:string;

    @Column()
    ndup:string;

    @Column({ precision: 12, scale: 2 })
    vlrdup:Number;

    @Column()
    vencdup:Date;

    @Column()
    cod_cli:string;
    
    @Column()
    forma_pagamento:string

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;
    
   
}