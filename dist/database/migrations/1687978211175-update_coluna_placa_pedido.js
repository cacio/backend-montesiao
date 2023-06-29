"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateColunaPlacaPedido1687978211175 = void 0;
const typeorm_1 = require("typeorm");
class updateColunaPlacaPedido1687978211175 {
    async up(queryRunner) {
        await queryRunner.addColumn("pedido", new typeorm_1.TableColumn({
            name: "placa",
            type: "varchar",
        }));
    }
    async down(queryRunner) {
    }
}
exports.updateColunaPlacaPedido1687978211175 = updateColunaPlacaPedido1687978211175;
