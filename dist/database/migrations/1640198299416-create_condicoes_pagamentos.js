"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCondicoesPagamentos1640198299416 = void 0;
const typeorm_1 = require("typeorm");
class createCondicoesPagamentos1640198299416 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "condigoes_pagamento",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "codigo",
                    type: "varchar"
                },
                {
                    name: "descricao",
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
        await queryRunner.dropTable('condigoes_pagamento');
    }
}
exports.createCondicoesPagamentos1640198299416 = createCondicoesPagamentos1640198299416;
