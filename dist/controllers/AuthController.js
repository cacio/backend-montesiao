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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    async Authenticate(request, response) {
        const { email, passwd } = request.body;
        const usuarioRepository = (0, typeorm_1.getRepository)(Usuario_1.default);
        const data = {
            email,
            passwd
        };
        const schema = Yup.object().shape({
            email: Yup.string().required().email(),
            passwd: Yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const users = await usuarioRepository.findOne({ where: { email } });
        if (!users) {
            return response.status(500).json({
                status: "error",
                message: "Email or password incorret!"
            });
            //throw new Error("Email or password incorret!");            
        }
        const isValidPassword = await bcryptjs_1.default.compare(passwd, users.passwd);
        if (!isValidPassword) {
            return response.status(500).json({
                status: "error",
                message: "Email or password incorret!"
            });
            //throw new Error("Email or password incorret!");
        }
        const token = jsonwebtoken_1.default.sign({ id: users.id }, 'Pr0d@5Iq', { expiresIn: '1d' });
        const user = usuarios_view_1.default.render(users);
        return response.json({ usuario: user, token });
    },
};
