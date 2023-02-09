import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuarios1639415610807 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
      name:"usuarios",
      columns: [
        {
          name:'id',
          type:'integer',
          unsigned:true,
          isPrimary:true,
          isGenerated:true,
          generationStrategy:'increment',     
        },
        {
          name:"name",
          type:'varchar'
        },
        {
          name:"email",
          type:'varchar'
        },
        {
          name:"passwd",
          type:'varchar'
        },        
        {
          name:"photo",
          type:'varchar'
        },
        {
          name:"cnpj_emp",
          type:'varchar'
        },
        {
          name:"cod_repre",
          type:'varchar'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }

}
