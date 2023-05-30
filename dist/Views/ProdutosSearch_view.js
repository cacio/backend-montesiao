"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(produtos) {
        return {
            id: produtos.id,
            value: produtos.codigo,
            label: produtos.decricao,
            unidade: produtos.unidade,
            preco_venda: String(produtos.preco_venda),
            estoque_atual: produtos.estoque_atual,
            pecas_estoque: produtos.pecas_estoque,
            peso_medio: produtos.peso_medio,
            preco_min: String(produtos.preco_min),
            preco_max: String(produtos.preco_max),
            idgrupo: produtos.idgrupo,
            foto: produtos.foto,
            cnpj_emp: produtos.cnpj_emp,
            created_at: produtos.created_at,
            updated_at: produtos.updated_at
        };
    },
    renderMany(produtos) {
        return produtos.map(produto => this.render(produto));
    }
};
