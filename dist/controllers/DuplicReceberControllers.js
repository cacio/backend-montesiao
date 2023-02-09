"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DuplicReceber_1 = __importDefault(require("../models/DuplicReceber"));
const DuplicReceber_view_1 = __importDefault(require("../Views/DuplicReceber_view"));
exports.default = {
    async Index(request, response) {
        const duplicreceberRepository = (0, typeorm_1.getRepository)(DuplicReceber_1.default);
        const duplicreceber = await duplicreceberRepository.find();
        return response.json(DuplicReceber_view_1.default.renderMany(duplicreceber));
    },
    async show(request, response) {
    },
    async create(request, response) {
        const { codigo, ndup, vlrdup, vencdup, cod_cli, forma_pagamento, cnpj_emp } = request.body;
        const data = {
            codigo,
            ndup,
            vlrdup,
            vencdup,
            cod_cli,
            forma_pagamento,
            cnpj_emp
        };
        const duplicreceberRepository = (0, typeorm_1.getRepository)(DuplicReceber_1.default);
        const duplicrecebers = duplicreceberRepository.create(data);
        await duplicreceberRepository.save(duplicrecebers);
        return response.status(201).json(duplicrecebers);
    },
    async ListaDuplicReceberAlterado(lastPulledVersion) {
        const duplicreceberRepository = (0, typeorm_1.getRepository)(DuplicReceber_1.default);
        const duplicreceberAlterado = await duplicreceberRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at", { lastPulledVersion }).getMany();
        return DuplicReceber_view_1.default.renderMany(duplicreceberAlterado);
    },
    async ListaDuplicReceberCriado(lastPulledVersion) {
        const duplicreceberRepository = (0, typeorm_1.getRepository)(DuplicReceber_1.default);
        const duplicreceberCriado = await duplicreceberRepository.find({
            created_at: (0, typeorm_1.MoreThan)(lastPulledVersion)
        });
        return DuplicReceber_view_1.default.renderMany(duplicreceberCriado);
    }
};
