import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createProdutos1640089151750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"produtos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name:"codigo",
                    type:"varchar"
                },
                {
                    name:"decricao",
                    type:"varchar"
                },
                {
                    name:"unidade",
                    type:"varchar"
                },
                {
                    name:"preco_venda",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"estoque_atual",
                    type:"varchar"
                },
                {
                    name:"pecas_estoque",
                    type:"varchar"
                },
                {
                    name:"peso_medio",
                    type:"varchar"
                },
                {
                    name:"preco_min",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"preco_max",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },

                {
                    name:"idgrupo",
                    type:"varchar",                    
                },
                {
                    name:'foto',
                    type:'varchar'
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
        await queryRunner.dropTable('produtos');
    }

}
