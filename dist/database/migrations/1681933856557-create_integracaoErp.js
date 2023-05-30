"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIntegracaoErp1681933856557 = void 0;
const typeorm_1 = require("typeorm");
class createIntegracaoErp1681933856557 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "integracao_erp",
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
                    name: "codigo",
                    type: "varchar"
                },
                {
                    name: "idpedido",
                    type: "varchar"
                },
                {
                    name: "idpederp",
                    type: "varchar"
                },
                {
                    name: "tpmovim",
                    type: "enum",
                    enum: ['I', 'D', 'U'],
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
        await queryRunner.dropTable('integracao_erp');
    }
}
exports.createIntegracaoErp1681933856557 = createIntegracaoErp1681933856557;
