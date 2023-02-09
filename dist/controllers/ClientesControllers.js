"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Clientes_1 = __importDefault(require("../models/Clientes"));
exports.default = {
    async index(request, response) {
        const { cnpj_emp } = request.params;
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const cliente = await clienteRepository.find({
            where: { cnpj_emp: cnpj_emp }
        });
        return response.status(200).json(cliente);
    },
    async indexRepresentante(request, response) {
        const { cnpj_emp, REPRESENTANTE } = request.body;
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const cliente = await clienteRepository.find({
            where: { cnpj_emp: cnpj_emp, REPRESENTANTE: REPRESENTANTE }
        });
        return response.status(200).json(cliente);
    },
    async ListaClienteAlterado(lastPulledVersion) {
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const clienteUpdate = await clienteRepository.createQueryBuilder().where("updated_at >= :lastPulledVersion AND updated_at <> created_at", { lastPulledVersion }).getMany();
        return clienteUpdate;
    },
    async ListaClientesCriado(lastPulledVersion) {
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const clienteCriado = await clienteRepository.find({
            created_at: (0, typeorm_1.MoreThan)(lastPulledVersion)
        });
        return clienteCriado;
    },
    async listadel() {
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const cliente = await clienteRepository.find();
        return cliente;
    },
    async create(request, response) {
        const { CODIGO, CNPJ_CPF, NOME, ENDERECO, BAIRRO, CEP, CIDADE, ESTADO, TELEFONE, INSCRICAO, ATIVO, CONTA_CTB, MOSTRA_FATURAS, PRAZO1, PRAZO2, PRAZO3, PRAZO4, PRAZO5, COND_VENDAS, REPRESENTANTE, FANTASIA, RESTRICAO, TABELA_PRECOS, CONTATO, E_MAIL, FAX, COND_PAG, LIMITE, SEGMENTO, GERARBOLETO, PESSOA, END_ENTREGA, BAIRRO_ENTREGA, CIDADE_ENTREGA, UF_ENTREGA, CEP_ENTREGA, END_COB, BAIRRO_COB, CIDADE_COB, UF_COB, CEP_COB, CELULAR, REGI, PAIS, E_MAILNFE, BOLETAO, PLACAVEICULO, PLACAVEICULOUF, ANTT, GERALOGIN, BLOQUEADO_SN, MOTIVO_BLOQUEIO, OBS, OBS_SAINOTA, foto, cnpj_emp } = request.body;
        const clienteRepository = (0, typeorm_1.getRepository)(Clientes_1.default);
        const data = { CODIGO,
            CNPJ_CPF,
            NOME,
            ENDERECO,
            BAIRRO,
            CEP,
            CIDADE,
            ESTADO,
            TELEFONE,
            INSCRICAO,
            ATIVO,
            CONTA_CTB,
            MOSTRA_FATURAS,
            PRAZO1,
            PRAZO2,
            PRAZO3,
            PRAZO4,
            PRAZO5,
            COND_VENDAS,
            REPRESENTANTE,
            FANTASIA,
            RESTRICAO,
            TABELA_PRECOS,
            CONTATO,
            E_MAIL,
            FAX,
            COND_PAG,
            LIMITE,
            SEGMENTO,
            GERARBOLETO,
            PESSOA,
            END_ENTREGA,
            BAIRRO_ENTREGA,
            CIDADE_ENTREGA,
            UF_ENTREGA,
            CEP_ENTREGA,
            END_COB,
            BAIRRO_COB,
            CIDADE_COB,
            UF_COB,
            CEP_COB,
            CELULAR,
            REGI,
            PAIS,
            E_MAILNFE,
            BOLETAO,
            PLACAVEICULO,
            PLACAVEICULOUF,
            ANTT,
            GERALOGIN,
            BLOQUEADO_SN,
            MOTIVO_BLOQUEIO,
            OBS,
            OBS_SAINOTA,
            foto,
            cnpj_emp };
        const cli = await clienteRepository.findOne({ where: { CODIGO } });
        if (cli) {
            return response.sendStatus(409);
        }
        const cliente = clienteRepository.create(data);
        await clienteRepository.save(cliente);
        return response.status(201).json(cliente);
    }
};
