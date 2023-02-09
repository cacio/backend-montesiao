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
let clientes = class clientes {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], clientes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CODIGO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CNPJ_CPF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "NOME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "ENDERECO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "BAIRRO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CEP", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CIDADE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "TELEFONE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "INSCRICAO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "ATIVO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CONTA_CTB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "MOSTRA_FATURAS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], clientes.prototype, "PRAZO1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], clientes.prototype, "PRAZO2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], clientes.prototype, "PRAZO3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], clientes.prototype, "PRAZO4", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], clientes.prototype, "PRAZO5", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "COND_VENDAS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "REPRESENTANTE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "FANTASIA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "RESTRICAO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "TABELA_PRECOS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CONTATO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "E_MAIL", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "FAX", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "COND_PAG", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "LIMITE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "SEGMENTO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "GERARBOLETO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "PESSOA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "END_ENTREGA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "BAIRRO_ENTREGA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CIDADE_ENTREGA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "UF_ENTREGA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CEP_ENTREGA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "END_COB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "BAIRRO_COB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CIDADE_COB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "UF_COB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CEP_COB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "CELULAR", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "REGI", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "PAIS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "E_MAILNFE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "BOLETAO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "PLACAVEICULO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "PLACAVEICULOUF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "ANTT", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "GERALOGIN", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "BLOQUEADO_SN", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "MOTIVO_BLOQUEIO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "OBS", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "OBS_SAINOTA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], clientes.prototype, "cnpj_emp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], clientes.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], clientes.prototype, "updated_at", void 0);
clientes = __decorate([
    (0, typeorm_1.Entity)('clientes'),
    __metadata("design:paramtypes", [])
], clientes);
exports.default = clientes;
