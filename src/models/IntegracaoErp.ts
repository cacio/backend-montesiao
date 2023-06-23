import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
export type RoleType = "I" | "D" | "U";
@Entity('integracao_erp')
export default class IntegracaoErp{

    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    codigo:string;

    @Column()
    idpedido:string;

    @Column()
    idpederp:string;

    @Column({
        type: "enum",
        enum: ["I", "D", "U"],
        default: "I"
    })
    tpmovim:RoleType;

    @Column()
    cnpj_emp:string;
    
    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;
  
}