import Produtos from "../models/Produtos";
export default{
    render(produtos: Produtos){
        return {
            id:produtos.id,
            codigo:produtos.codigo,
            decricao:produtos.decricao,
            unidade:produtos.unidade,
            preco_venda:String(produtos.preco_venda),
            estoque_atual:produtos.estoque_atual,
            pecas_estoque:produtos.pecas_estoque,
            peso_medio:produtos.peso_medio,
            preco_min: String(produtos.preco_min),
            preco_max:String(produtos.preco_max),
            idgrupo:produtos.idgrupo,
            foto:produtos.foto,
            cnpj_emp:produtos.cnpj_emp,
            created_at:produtos.created_at,
            updated_at:produtos.updated_at
        }
    },    
    renderMany(produtos: Produtos[]){
        return produtos.map(produto =>this.render(produto));
    }
}