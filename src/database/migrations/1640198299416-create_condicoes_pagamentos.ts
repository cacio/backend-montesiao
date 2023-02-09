import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createCondicoesPagamentos1640198299416 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:"condigoes_pagamento",
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
            name:"descricao",
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
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('condigoes_pagamento');
  }

}
