import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('produtos')
export default class Produtos{
    @PrimaryColumn()
    id: string;
    
    @Column()
    codigo:string;

    @Column()
    decricao:string;

    @Column()
    unidade:string;

    @Column({ precision: 12, scale: 2 })
    preco_venda:Number

    @Column()
    estoque_atual:string;

    @Column()
    pecas_estoque:string;
    
    @Column()
    peso_medio:string;

    @Column({ precision: 12, scale: 2 })
    preco_min:Number;

    @Column()
    preco_max:number;

    @Column()
    idgrupo:string;

    @Column()
    foto:string;

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}