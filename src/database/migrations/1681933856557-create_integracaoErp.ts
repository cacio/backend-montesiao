import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createIntegracaoErp1681933856557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name:"integracao_erp",
          columns:[
            // {
            //     name:"id",
            //     type:"uuid",
            //     isPrimary:true,
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
                name:"codigo",
                type:"varchar"
            },
            {
                name:"idpedido",
                type:"varchar"
            },
            {
                name:"idpederp",
                type:"varchar"
            },
            {
                name:"tpmovim",
                type:"enum",
                enum: ['I', 'D', 'U'],                
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
        await queryRunner.dropTable('integracao_erp');
    }

}
