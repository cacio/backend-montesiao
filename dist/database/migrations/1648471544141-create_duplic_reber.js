"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDuplicReber1648471544141 = void 0;
const typeorm_1 = require("typeorm");
class createDuplicReber1648471544141 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'duplic_receber',
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
                    name: "ndup",
                    type: "varchar"
                },
                {
                    name: "vlrdup",
                    type: "decimal",
                    precision: 12,
                    scale: 2
                },
                {
                    name: "vencdup",
                    type: "date"
                },
                {
                    name: "cod_cli",
                    type: "varchar"
                },
                {
                    name: "forma_pagamento",
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
        await queryRunner.dropTable('duplic_receber');
    }
}
exports.createDuplicReber1648471544141 = createDuplicReber1648471544141;
