import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPedidodetalhe1650377560783 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"pedidodetalhe",
            columns: [
                // {
                //     name: "id",
                //     type: "uuid",
                //     isPrimary: true,
                // },
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',     
                  },
                
                {
                    name:"pedido_id_despositivo",
                    type:"varchar"
                },
                {
                    name:"pedido_id",
                    type:"varchar"
                },
                {
                    name:"qtd",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"preco",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"cod_prod",
                    type:"varchar"
                },
                {
                    name:"pc",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"desconto",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"obs",
                    type:"varchar"
                },
                {
                    name:"tipo_pc_qtd",
                    type:"varchar"
                },
                {
                    name:"cnpj_emp",
                    type:'varchar'
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedidodetalhe');
    }

}
