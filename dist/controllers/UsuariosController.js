"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const usuarios_view_1 = __importDefault(require("../Views/usuarios_view"));
const Yup = __importStar(require("yup"));
exports.default = {
    async Index(request, response) {
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const usuario = await usuarioRepository.find();
        return response.json(usuarios_view_1.default.renderMany(usuario));
    },
    async show(request, response) {
        const { id } = request.params;
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const usuario = await usuarioRepository.findOneOrFail(id);
        return response.json(usuarios_view_1.default.render(usuario));
    },
    async create(request, response) {
        const { name, email, passwd, photo, cnpj_emp, cod_repre } = request.body;
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const data = {
            name,
            email,
            passwd,
            photo,
            cnpj_emp,
            cod_repre
        };
        const schema = Yup.object().shape({
            name: Yup.string().required("Informar um nome !"),
            email: Yup.string().required("Informar ao mesnos um email!").email("E-mail invalido!"),
            passwd: Yup.string().required("Digite uma senha!"),
            photo: Yup.string(),
            cnpj_emp: Yup.string().required("Informar um Cnpj de sua empresa!"),
            cod_repre: Yup.string().required("Informar o código do representante com a empresa !")
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const user = await usuarioRepository.findOne({ where: { email } });
        if (user) {
            return response.sendStatus(409);
        }
        const usuario = usuarioRepository.create(data);
        await usuarioRepository.save(usuario);
        return response.status(201).json(usuario);
    },
    async asyncupdate(request, response) {
        const { id, user_id, name, email, passwd, photo, cnpj_emp, cod_repre } = request.body.updated[0];
        /* console.log("PUSH DO USUÁRIO")
         console.log(request.body.updated[0]);*/
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const data = {
            name: name,
            photo: photo
        };
        const clientes = await usuarioRepository.createQueryBuilder().update(Usuario_1.default).set(data).where('id=:id', { id: user_id }).execute();
        return response.status(201).json(clientes);
    },
    async VrificaUsuarioCNPJ(request, response) {
        const { cnpj_emp, cod_repre } = request.body;
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const users = await usuarioRepository.findOne({ where: { cod_repre, cnpj_emp } });
        if (users) {
            return response.status(201).json({
                status: "error",
                message: "Representante ja exite na base de dados da empresa"
            });
        }
        return response.status(201).json({
            status: "sucesso",
            message: "Usuario não existe para essa empresa " + cnpj_emp + " "
        });
    }
};
