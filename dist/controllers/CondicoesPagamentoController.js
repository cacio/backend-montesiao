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
const Yup = __importStar(require("yup"));
const CondicoesPagamento_1 = __importDefault(require("../models/CondicoesPagamento"));
const CondicoesPagamento_view_1 = __importDefault(require("../Views/CondicoesPagamento_view"));
exports.default = {
    async ListaProdutoAlterado(lastPulledVersion) {
        const condicoespagamentoRepository = (0, typeorm_1.getRepository)(CondicoesPagamento_1.default);
        const condicoesPagamentoAlterado = await condicoespagamentoRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at", { lastPulledVersion }).getMany();
        return CondicoesPagamento_view_1.default.renderMany(condicoesPagamentoAlterado);
    },
    async ListaCondicoesPagamentoCriado(lastPulledVersion) {
        const condicoespagamentoRepository = (0, typeorm_1.getRepository)(CondicoesPagamento_1.default);
        const condicoesPagamentoCriado = await condicoespagamentoRepository.find({
            created_at: (0, typeorm_1.MoreThan)(lastPulledVersion)
        });
        return CondicoesPagamento_view_1.default.renderMany(condicoesPagamentoCriado);
    },
    async create(request, response) {
        const { codigo, descricao, cnpj_emp } = request.body;
        const condicoesPagametoRepository = (0, typeorm_1.getRepository)(CondicoesPagamento_1.default);
        const data = {
            codigo,
            descricao,
            cnpj_emp
        };
        const schema = Yup.object().shape({
            codigo: Yup.string().required("Informar ao menos o código interno!"),
            descricao: Yup.string().required("Informar uma descrição!"),
            cnpj_emp: Yup.string().required("Informar ao menos a forma de pagamento da sua empresa !"),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const condicoes_pagamento = condicoesPagametoRepository.create(data);
        await condicoesPagametoRepository.save(condicoes_pagamento);
        return response.status(201).json(condicoes_pagamento);
    }
};
