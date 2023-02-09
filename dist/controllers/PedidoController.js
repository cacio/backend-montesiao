"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Pedido_1 = __importDefault(require("../models/Pedido"));
const uuid_1 = require("uuid");
exports.default = {
    async Index(request, response) {
    },
    async show(request, response) {
    },
    async create(request, response) {
    },
    async AsyncCreate(request, response) {
        const { created } = request.body;
        const createdPedido = created;
        const pedidoRepository = (0, typeorm_1.getRepository)(Pedido_1.default);
        if (createdPedido.length > 0) {
            //await pedidoRepository.createQueryBuilder().insert().into(Pedido).values(createdPedido).execute();
            createdPedido.forEach(async (item) => {
                const data = {
                    id: (0, uuid_1.v4)(),
                    pedido_id: item.pedido_id,
                    CODIGO_RETAGUARDA: item.CODIGO_RETAGUARDA,
                    data_pedido: item.data_pedido,
                    codigo_cliente: item.codigo_cliente,
                    data_entrega: item.data_entrega,
                    hora_pedido: item.hora_pedido,
                    codigo_usuario: item.codigo_usuario,
                    codigo_vendedor: item.codigo_vendedor,
                    status: item.status,
                    prazo1: item.prazo1,
                    prazo2: item.prazo2,
                    prazo3: item.prazo3,
                    prazo4: item.prazo4,
                    prazo5: item.prazo5,
                    obs: item.obs,
                    valor_desconto: item.valor_desconto,
                    id_tabela_preco: item.id_tabela_preco,
                    retirada: item.retirada,
                    cnpj_emp: item.cnpj_emp
                };
                await pedidoRepository.createQueryBuilder().insert().into(Pedido_1.default).values(data).execute();
            });
        }
        return response.status(201).json({ response: 'teste' });
    }
};
