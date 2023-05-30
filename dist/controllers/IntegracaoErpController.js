"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const IntegracaoErp_1 = __importDefault(require("../models/IntegracaoErp"));
exports.default = {
    async create(request, response) {
        const { codigo, idpedido, idpederp, tpmovim, cnpj_emp } = request.body;
        const IntegracaoErpRepository = (0, typeorm_1.getRepository)(IntegracaoErp_1.default);
        const data = {
            codigo,
            idpedido,
            idpederp,
            tpmovim,
            cnpj_emp
        };
        const IntegracaoCriado = await IntegracaoErpRepository.find({
            idpedido: idpedido
        });
        if (IntegracaoCriado.length == 0) {
            console.log('aqui');
            const Integracao = IntegracaoErpRepository.create(data);
            await IntegracaoErpRepository.save(Integracao);
            const io = request.app.get('socketio');
            io.emit('pushErpCode', {
                pedido: Integracao,
                cnpj_emp: cnpj_emp
            });
            return response.status(201).json(Integracao);
        }
        else {
            console.log('aqui');
            const io = request.app.get('socketio');
            io.emit('pushErpCode', {
                pedido: IntegracaoCriado,
                cnpj_emp: cnpj_emp
            });
            return response.status(201).json(IntegracaoCriado);
        }
    },
};
