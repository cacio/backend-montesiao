import CondicoesPagamento from "../models/CondicoesPagamento";
export default{
    render(condicoespagamento: CondicoesPagamento){
        return {
            id:condicoespagamento.id,
            codigo:condicoespagamento.codigo,
            descricao:condicoespagamento.descricao,           
            cnpj_emp:condicoespagamento.cnpj_emp,
            created_at:condicoespagamento.created_at,
            updated_at:condicoespagamento.updated_at
        }
    },    
    renderMany(condicoespagamento: CondicoesPagamento[]){
        return condicoespagamento.map(condicoespagamentos =>this.render(condicoespagamentos));
    }
}