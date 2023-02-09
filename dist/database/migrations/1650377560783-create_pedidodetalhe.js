"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPedidodetalhe1650377560783 = void 0;
const typeorm_1 = require("typeorm");
class createPedidodetalhe1650377560783 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "pedidodetalhe",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
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
                    name: "qtd",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "preco",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "cod_prod",
                    type: "varchar"
                },
                {
                    name: "pc",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "desconto",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "obs",
                    type: "varchar"
                },
                {
                    name: "tipo_pc_qtd",
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
        await queryRunner.dropTable('pedidodetalhe');
    }
}
exports.createPedidodetalhe1650377560783 = createPedidodetalhe1650377560783;
