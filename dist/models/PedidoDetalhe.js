"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let PedidoDetalhe = class PedidoDetalhe {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "pedido_id_despositivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "pedido_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], PedidoDetalhe.prototype, "qtd", void 0);
__decorate([
    (0, typeorm_1.Column)({ precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], PedidoDetalhe.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "cod_prod", void 0);
__decorate([
    (0, typeorm_1.Column)({ precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], PedidoDetalhe.prototype, "pc", void 0);
__decorate([
    (0, typeorm_1.Column)({ precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], PedidoDetalhe.prototype, "desconto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "tipo_pc_qtd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoDetalhe.prototype, "cnpj_emp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PedidoDetalhe.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PedidoDetalhe.prototype, "updated_at", void 0);
PedidoDetalhe = __decorate([
    (0, typeorm_1.Entity)('pedidodetalhe'),
    __metadata("design:paramtypes", [])
], PedidoDetalhe);
exports.default = PedidoDetalhe;
