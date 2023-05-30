"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPedido1650376266727 = void 0;
const typeorm_1 = require("typeorm");
class createPedido1650376266727 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'pedido',
            columns: [
                // {
                //     name: "id",
                //     type: "uuid",
                //     isPrimary: true,
                // },
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "pedido_id_despositivo",
                    type: "varchar"
                },
                {
                    name: "pedido_id",
                    type: "varchar"
                },
                {
                    name: "CODIGO_RETAGUARDA",
                    type: "varchar"
                },
                {
                    name: "data_pedido",
                    type: "date"
                },
                {
                    name: "codigo_cliente",
                    type: "varchar"
                },
                {
                    name: "data_entrega",
                    type: "date"
                },
                {
                    name: "hora_pedido",
                    type: "time"
                },
                {
                    name: "codigo_usuario",
                    type: "varchar"
                },
                {
                    name: "codigo_vendedor",
                    type: "varchar"
                },
                {
                    name: "status",
                    type: "varchar"
                },
                {
                    name: "prazo1",
                    type: "varchar"
                },
                {
                    name: "prazo2",
                    type: "varchar"
                },
                {
                    name: "prazo3",
                    type: "varchar"
                },
                {
                    name: "prazo4",
                    type: "varchar"
                },
                {
                    name: "prazo5",
                    type: "varchar"
                },
                {
                    name: "obs",
                    type: "varchar"
                },
                {
                    name: "valor_desconto",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "id_tabela_preco",
                    type: "varchar"
                },
                {
                    name: "retirada",
                    type: "varchar"
                },
                {
                    name: "cnpj_emp",
                    type: 'varchar'
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
    async down(queryRunner) {
        await queryRunner.dropTable('pedido');
    }
}
exports.createPedido1650376266727 = createPedido1650376266727;
