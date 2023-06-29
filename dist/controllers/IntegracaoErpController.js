"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const IntegracaoErp_1 = __importDefault(require("../models/IntegracaoErp"));
exports.default = {
    async create(request, response) {
        //const { codigo,idpedido,idpederp,tpmovim,cnpj_emp }  = request.body;
        const data = request.body;
        const { cnpj_emp } = request.params;
        const currentData = data;
        const IntegracaoErpRepository = (0, typeorm_1.getRepository)(IntegracaoErp_1.default);
        for (const element of currentData) {
            const codigo = element.codigo;
            const idpedido = element.idpedido;
            const idpederp = element.idpederp;
            const tpmovim = element.tpmovim;
            const cnpj_emp = element.cnpj_emp;
            const IntegracaoCriado = await IntegracaoErpRepository.find({
                idpedido: idpedido
            });
            const data = {
                codigo,
                idpedido,
                idpederp,
                tpmovim,
                cnpj_emp
            };
            if (IntegracaoCriado.length == 0) {
                const Integracao = IntegracaoErpRepository.create(data);
                await IntegracaoErpRepository.save(Integracao);
            }
        }
        const io = request.app.get('socketio');
        io.emit('pushErpCode', {
            pedido: currentData,
            cnpj_emp: cnpj_emp
        });
        return response.status(201).json(currentData);
    },
};
