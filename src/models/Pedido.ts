import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,ManyToMany ,JoinColumn } from "typeorm";
import  PedidoDetalhe  from './PedidoDetalhe';
import { v4 as uuidV4 } from "uuid";

@Entity('pedido')

export default class Pedido{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    pedido_id_despositivo:string;
    
    @Column()
    pedido_id:string;

    @Column()
    CODIGO_RETAGUARDA:string;

    @Column()
    data_pedido:Date;

    @Column()
    codigo_cliente:string;

    @Column()
    data_entrega:Date;

    @Column()
    hora_pedido:String;

    @Column()
    codigo_usuario:string;

    @Column()
    codigo_vendedor:string;

    @Column()
    status:string;

    @Column()
    prazo1:string;

    @Column()
    prazo2:string;

    @Column()
    prazo3:string;

    @Column()
    prazo4:string;

    @Column()
    prazo5:string;

    @Column()
    obs:string;

    @Column({ precision: 12, scale: 2 })
    valor_desconto:Number;

    @Column()
    id_tabela_preco:string;

    @Column()
    retirada:string;

    @Column()
    placa:string;

    @ManyToMany((type) => PedidoDetalhe,(detalhe)=>detalhe.pedido_id)    
    detalhe: PedidoDetalhe[]

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;
    


}