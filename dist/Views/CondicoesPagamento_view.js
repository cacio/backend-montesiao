"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(condicoespagamento) {
        return {
            id: condicoespagamento.id,
            codigo: condicoespagamento.codigo,
            descricao: condicoespagamento.descricao,
            cnpj_emp: condicoespagamento.cnpj_emp,
            created_at: condicoespagamento.created_at,
            updated_at: condicoespagamento.updated_at
        };
    },
    renderMany(condicoespagamento) {
        return condicoespagamento.map(condicoespagamentos => this.render(condicoespagamentos));
    }
};
