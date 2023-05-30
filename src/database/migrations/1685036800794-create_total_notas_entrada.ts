import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createTotalNotasEntrada1685036800794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'totaliza_notas_entrada',
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
                    name:"numerosemana",
                    type:"varchar"
                },
                {
                    name:"tot_icmsst",
                    type:"decimal(20, 6)",                    
                },
                {
                    name:"vltotnota",
                    type:"decimal(20, 6)"
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
        await queryRunner.dropTable('totaliza_notas_entrada');
    }

}
