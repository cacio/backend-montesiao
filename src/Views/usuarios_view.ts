import Usuario from "../models/Usuario";
export default{
    render(usuario: Usuario){
        return {
            id: usuario.id.toString(),
            name: usuario.name,
            email: usuario.email,
            //passwd: usuario.passwd,
            photo: usuario.photo,
            cnpj_emp: usuario.cnpj_emp,
            codrepre:usuario.cod_repre,
            created_at: usuario.created_at,
            updated_at: usuario.updated_at
        }
    },    
    renderMany(usuarios: Usuario[]){
        return usuarios.map(usuario =>this.render(usuario));
    }
}