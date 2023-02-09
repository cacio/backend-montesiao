"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(usuario) {
        return {
            id: usuario.id.toString(),
            name: usuario.name,
            email: usuario.email,
            //passwd: usuario.passwd,
            photo: usuario.photo,
            cnpj_emp: usuario.cnpj_emp,
            codrepre: usuario.cod_repre,
            created_at: usuario.created_at,
            updated_at: usuario.updated_at
        };
    },
    renderMany(usuarios) {
        return usuarios.map(usuario => this.render(usuario));
    }
};
