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
const Produtos_1 = __importDefault(require("../models/Produtos"));
const produtos_view_1 = __importDefault(require("../Views/produtos_view"));
const Yup = __importStar(require("yup"));
exports.default = {
    async ListaProdutoAlterado(lastPulledVersion) {
        const produtoRepository = (0, typeorm_1.getRepository)(Produtos_1.default);
        const produtoAlterado = await produtoRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at", { lastPulledVersion }).getMany();
        return produtos_view_1.default.renderMany(produtoAlterado);
    },
    async ListaProdutoCriado(lastPulledVersion) {
        const produtoRepository = (0, typeorm_1.getRepository)(Produtos_1.default);
        const produtoCriado = await produtoRepository.find({
            created_at: (0, typeorm_1.MoreThan)(lastPulledVersion)
        });
        return produtos_view_1.default.renderMany(produtoCriado);
    },
    async create(request, response) {
        const { codigo, decricao, unidade, preco_venda, estoque_atual, pecas_estoque, peso_medio, preco_min, preco_max, idgrupo, foto, cnpj_emp } = request.body;
        const produtoRepository = (0, typeorm_1.getRepository)(Produtos_1.default);
        const data = {
            codigo,
            decricao,
            unidade,
            preco_venda,
            estoque_atual,
            pecas_estoque,
            peso_medio,
            preco_min,
            preco_max,
            idgrupo,
            foto,
            cnpj_emp
        };
        const schema = Yup.object().shape({
            codigo: Yup.string().required("Informar ao menos o código interno!"),
            decricao: Yup.string().required("Informar uma descrição do produto!"),
            unidade: Yup.string().required("Informar a unidade do produto"),
            preco_venda: Yup.string().required("Informar o preço de venda"),
            estoque_atual: Yup.string().required("Informar o estoque desse produto!"),
            peso_medio: Yup.string().required("Informar um peso medio!"),
            cnpj_emp: Yup.string().required("Informar o cnpj da empresa responsavel por esse produto"),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const produtos = produtoRepository.create(data);
        await produtoRepository.save(produtos);
        return response.status(201).json(produtos);
    }
};
