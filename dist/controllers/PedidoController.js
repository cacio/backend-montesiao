"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Pedido_1 = __importDefault(require("../models/Pedido"));
const PedidoDetalhe_1 = __importDefault(require("../models/PedidoDetalhe"));
const uuid_1 = require("uuid");
exports.default = {
    async Index(request, response) {
    },
    async show(request, response) {
    },
    async create(request, response) {
        const created = request.body;
        const { cnpj_emp } = request.params;
        const createdPedido = created;
        const pedidoRepository = (0, typeorm_1.getRepository)(Pedido_1.default);
        //const pedidoDetalheRepository = getRepository(PedidoDetalhe);            
        try {
            for (const element of createdPedido) {
                if (!element.codigo_cliente) {
                    return response.status(200).json({
                        status: "error",
                        response: `Código cliente não vinculado!`,
                        data: element
                    });
                }
                const verificaseexiste = await pedidoRepository.findOne({
                    where: {
                        pedido_id: element.pedido_id
                    }
                });
                if (!verificaseexiste) {
                    const data = {
                        pedido_id_despositivo: element.pedido_id,
                        pedido_id: element.pedido_id,
                        CODIGO_RETAGUARDA: element.CODIGO_RETAGUARDA,
                        data_pedido: element.data_pedido,
                        codigo_cliente: element.codigo_cliente,
                        data_entrega: element.data_entrega,
                        hora_pedido: element.hora_pedido,
                        codigo_usuario: element.codigo_usuario,
                        codigo_vendedor: element.codigo_vendedor,
                        status: element.status,
                        prazo1: element.prazo1,
                        prazo2: element.prazo2,
                        prazo3: element.prazo3,
                        prazo4: element.prazo4,
                        prazo5: element.prazo5,
                        obs: element.obs,
                        valor_desconto: element.valor_desconto,
                        id_tabela_preco: element.id_tabela_preco,
                        retirada: element.retirada,
                        placa: element.placa,
                        cnpj_emp: element.cnpj_emp
                    };
                    console.log(element.data_pedido);
                    const pedido = pedidoRepository.create(data);
                    await pedidoRepository.save(pedido);
                }
                const pedidoDetalhePromise = element.detalhe;
                //const pedidoDetalhe: PedidoDetalhe[] = await pedidoDetalhePromise;
                pedidoDetalhePromise.forEach(async (item) => {
                    //console.log(item);
                    const DataDetalhe = {
                        pedido_id_despositivo: item.id,
                        pedido_id: item.pedido_id,
                        qtd: item.qtd,
                        preco: item.preco,
                        cod_prod: item.cod_prod,
                        pc: item.pc,
                        desconto: 0,
                        obs: '',
                        tipo_pc_qtd: "2",
                        cnpj_emp: element.cnpj_emp
                    };
                    const pedidoDetalheRepository = (0, typeorm_1.getRepository)(PedidoDetalhe_1.default);
                    const verificaseexitedetalhe = await pedidoDetalheRepository.findOne({
                        where: {
                            pedido_id_despositivo: item.id
                        }
                    });
                    if (!verificaseexitedetalhe) {
                        const detalhe = pedidoDetalheRepository.create(DataDetalhe);
                        await pedidoDetalheRepository.save(detalhe);
                    }
                });
            }
            const io = request.app.get("socketio");
            io.emit("newPedido", {
                pedido: createdPedido,
                cnpj_emp: cnpj_emp
            });
            return response.status(201).json({
                status: "success",
                response: `Pedidos Inseridos com sucesso!`,
                data: createdPedido
            });
        }
        catch (error) {
            console.error(error);
            return response
                .status(500)
                .json({ status: "error", response: "Erro interno no servidor" });
        }
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
                    placa: item.placa,
                    cnpj_emp: item.cnpj_emp
                };
                await pedidoRepository.createQueryBuilder().insert().into(Pedido_1.default).values(data).execute();
            });
        }
        return response.status(201).json({ response: 'teste' });
    },
    async HandllerPushPedidoRetaguarda(request, response) {
        const { cnpj_emp } = request.params;
        const pedidoRepository = (0, typeorm_1.getRepository)(Pedido_1.default);
        const pedidos = await pedidoRepository
            .createQueryBuilder('pedido')
            .leftJoinAndSelect('integracao_erp', 'i', 'i.codigo = pedido.pedido_id')
            .where('pedido.cnpj_emp = :cnpj and i.id is null', { cnpj: cnpj_emp })
            .getMany();
        // const createdPedido: Array<{ pedido: Pedido, detalhe: Promise<PedidoDetalhe[]> }> = [];
        const createdPedido = [];
        for (const pedido of pedidos) {
            const pedidoDetalheRepository = (0, typeorm_1.getRepository)(PedidoDetalhe_1.default);
            const detalhes = await pedidoDetalheRepository.find({
                where: {
                    pedido_id: pedido.pedido_id,
                },
            });
            createdPedido.push(Object.assign(Object.assign({}, pedido), { detalhe: detalhes ? detalhes : [] }));
        }
        return response.status(201).json({
            status: "success",
            response: `Pedidos Inseridos com sucesso!`,
            data: createdPedido
        });
        // console.log(createdPedido);
    }
};
