import {MigrationInterface, QueryRunner, Table,TableColumn} from "typeorm";

export class createPedido1650376266727 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'pedido',
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
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
                    name:"CODIGO_RETAGUARDA",
                    type:"varchar"
                },
                {
                    name:"data_pedido",
                    type:"date"
                },
                {
                    name:"codigo_cliente",
                    type:"varchar"
                },
                {
                    name:"data_entrega",
                    type:"date"
                },
                {
                    name:"hora_pedido",
                    type:"time"
                },
                {
                    name:"codigo_usuario",
                    type:"varchar"
                },
                {
                    name:"codigo_vendedor",
                    type:"varchar"
                },
                {
                    name:"status",
                    type:"varchar"
                },
                {
                    name:"prazo1",
                    type:"varchar"
                },
                {
                    name:"prazo2",
                    type:"varchar"
                },
                {
                    name:"prazo3",
                    type:"varchar"
                },
                {
                    name:"prazo4",
                    type:"varchar"
                },
                {
                    name:"prazo5",
                    type:"varchar"
                },
                {
                    name:"obs",
                    type:"varchar"
                },
                {
                    name:"valor_desconto",
                    type:"decimal",
                    precision:12,
                    scale: 2
                },
                {
                    name:"id_tabela_preco",
                    type:"varchar"
                },
                {
                    name:"retirada",
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
        await queryRunner.dropTable('pedido');
        
    }

}
