import clientes from "../models/Clientes";

export default{
    render(cliente:clientes){
        return{
            id:cliente.id
        };
    }
}