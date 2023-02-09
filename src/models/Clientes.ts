import { Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('clientes')
export default class clientes{
    @PrimaryColumn()
    id:string;

    @Column()
    CODIGO:string;

    @Column()
    CNPJ_CPF:string;

    @Column()
    NOME:string;

    @Column()
    ENDERECO:string;

    @Column()
    BAIRRO:string;

    @Column()
    CEP:string;

    @Column()
    CIDADE:string;

    @Column()
    ESTADO:string;

    @Column()
    TELEFONE:string;

    @Column()
    INSCRICAO:string;

    @Column()
    ATIVO:string;

    @Column()
    CONTA_CTB:string;

    @Column()
    MOSTRA_FATURAS:string;

    @Column()
    PRAZO1:number;

    @Column()
    PRAZO2:number;

    @Column()
    PRAZO3:number;

    @Column()
    PRAZO4:number;

    @Column()
    PRAZO5:number;

    @Column()
    COND_VENDAS:string;

    @Column()
    REPRESENTANTE:string;

    @Column()
    FANTASIA:string;

    @Column()
    RESTRICAO:string;

    @Column()
    TABELA_PRECOS:string;

    @Column()
    CONTATO:string;

    @Column()
    E_MAIL:string;

    @Column()
    FAX:string;

    @Column()
    COND_PAG:string;

    @Column()
    LIMITE:string;

    @Column()
    SEGMENTO:string;

    @Column()
    GERARBOLETO:string;

    @Column()
    PESSOA:string;

    @Column()
    END_ENTREGA:string;

    @Column()
    BAIRRO_ENTREGA:string;

    @Column()
    CIDADE_ENTREGA:string;

    @Column()
    UF_ENTREGA:string;

    @Column()
    CEP_ENTREGA:string;

    @Column()
    END_COB:string;

    @Column()
    BAIRRO_COB:string;

    @Column()
    CIDADE_COB:string;

    @Column()
    UF_COB:string;

    @Column()
    CEP_COB:string;

    @Column()
    CELULAR:string;

    @Column()
    REGI:string;

    @Column()
    PAIS:string;

    @Column()
    E_MAILNFE:string;

    @Column()
    BOLETAO:string;

    @Column()
    PLACAVEICULO:string;

    @Column()
    PLACAVEICULOUF:string;

    @Column()
    ANTT:string;

    @Column()
    GERALOGIN:string;

    @Column()
    BLOQUEADO_SN:string;

    @Column()
    MOTIVO_BLOQUEIO:string;

    @Column()
    OBS:string;

    @Column()
    OBS_SAINOTA:string;

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