import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('totaliza_notas_entrada')
export default class TotalNotaEntrada{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    numerosemana:string;

    @Column({type:"decimal", precision:20,scale:6,default:0.00})
    tot_icmsst:number;

    @Column({type:"decimal", precision:20,scale:6,default:0.00})
    vltotnota:number;

    @Column()
    cnpj_emp:string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;

    

}