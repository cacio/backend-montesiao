import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('condigoes_pagamento')
export default class CondicoesPagamento{

    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    codigo:string;

    @Column()
    descricao:string;

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;

    
}