import clientes from "../models/Clientes";

export default{
    render(cliente:clientes){
        return{
            id:cliente.id,
            codigo:cliente.CODIGO,
            value:cliente.CODIGO,
            label:cliente.NOME,
            fantasia:cliente.FANTASIA
        };
    },
    renderMany(clientes: clientes[]){
        return clientes.map(cliente =>this.render(cliente));
    }
}