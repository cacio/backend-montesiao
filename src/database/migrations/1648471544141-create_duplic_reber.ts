import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createDuplicReber1648471544141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
                name:'duplic_receber',
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
                          name:"ndup",
                          type:"varchar"
                      },
                      {
                          name:"vlrdup",
                          type:"decimal",
                          precision:12,
                          scale: 2
                      },
                      {
                          name:"vencdup",
                          type:"date"
                      },
                      {
                          name:"cod_cli",
                          type:"varchar"
                      },
                      {
                          name:"forma_pagamento",
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
        await queryRunner.dropTable('duplic_receber');
    }

}
