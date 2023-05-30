"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(cliente) {
        return {
            id: cliente.id,
            codigo: cliente.CODIGO,
            value: cliente.CODIGO,
            label: cliente.NOME,
            fantasia: cliente.FANTASIA
        };
    },
    renderMany(clientes) {
        return clientes.map(cliente => this.render(cliente));
    }
};
