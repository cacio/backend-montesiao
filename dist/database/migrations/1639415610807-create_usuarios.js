"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarios1639415610807 = void 0;
const typeorm_1 = require("typeorm");
class createUsuarios1639415610807 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "name",
                    type: 'varchar'
                },
                {
                    name: "email",
                    type: 'varchar'
                },
                {
                    name: "passwd",
                    type: 'varchar'
                },
                {
                    name: "photo",
                    type: 'varchar'
                },
                {
                    name: "cnpj_emp",
                    type: 'varchar'
                },
                {
                    name: "cod_repre",
                    type: 'varchar'
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('usuarios');
    }
}
exports.createUsuarios1639415610807 = createUsuarios1639415610807;
