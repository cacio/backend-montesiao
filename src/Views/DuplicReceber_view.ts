import DuplicReceber from "../models/DuplicReceber";
export default{
    render(duplicreceber: DuplicReceber){
        return {
            id: duplicreceber.id.toString(),
            codigo: duplicreceber.codigo,
            ndup: duplicreceber.ndup,
            vlrdup:duplicreceber.vlrdup,
            vencdup:duplicreceber.vencdup,
            cod_cli:duplicreceber.cod_cli,
            forma_pagamento:duplicreceber.forma_pagamento,
            cnpj_emp:duplicreceber.cnpj_emp,
            created_at:duplicreceber.created_at,
            updated_at:duplicreceber.updated_at                  
        }
    },    
    renderMany(duplicreceber: DuplicReceber[]){
        return duplicreceber.map(duplicrecebers =>this.render(duplicrecebers));
    }
}