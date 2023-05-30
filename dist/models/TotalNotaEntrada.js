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
let TotalNotaEntrada = class TotalNotaEntrada {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], TotalNotaEntrada.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TotalNotaEntrada.prototype, "numerosemana", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], TotalNotaEntrada.prototype, "tot_icmsst", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 6, default: 0.00 }),
    __metadata("design:type", Number)
], TotalNotaEntrada.prototype, "vltotnota", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TotalNotaEntrada.prototype, "cnpj_emp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TotalNotaEntrada.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TotalNotaEntrada.prototype, "updated_at", void 0);
TotalNotaEntrada = __decorate([
    (0, typeorm_1.Entity)('totaliza_notas_entrada'),
    __metadata("design:paramtypes", [])
], TotalNotaEntrada);
exports.default = TotalNotaEntrada;
