import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class updateColunaPlacaPedido1687978211175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "pedido",
            new TableColumn({
                name: "placa",
                type: "varchar",
            }),
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
