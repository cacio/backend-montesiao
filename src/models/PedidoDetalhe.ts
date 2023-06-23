import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('pedidodetalhe')

export default class PedidoDetalhe{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    pedido_id_despositivo:string;
    
    @Column()
    pedido_id:string;

    @Column({ precision: 12, scale: 2 })
    qtd:Number;
    
    @Column({ precision: 12, scale: 2 })
    preco:Number;

    @Column()
    cod_prod:string;

    @Column({ precision: 12, scale: 2 })
    pc:Number;

    @Column({ precision: 12, scale: 2 })
    desconto:Number;

    @Column()
    obs:string;

    @Column()
    tipo_pc_qtd:string;

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;
        

}