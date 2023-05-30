"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTotalNotasEntrada1685036800794 = void 0;
const typeorm_1 = require("typeorm");
class createTotalNotasEntrada1685036800794 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'totaliza_notas_entrada',
            columns: [
                // {
                //     name:"id",
                //     type:"uuid",
                //     isPrimary:true,
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
                    name: "numerosemana",
                    type: "varchar"
                },
                {
                    name: "tot_icmsst",
                    type: "decimal(20, 6)",
                },
                {
                    name: "vltotnota",
                    type: "decimal(20, 6)"
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
        await queryRunner.dropTable('totaliza_notas_entrada');
    }
}
exports.createTotalNotasEntrada1685036800794 = createTotalNotasEntrada1685036800794;
