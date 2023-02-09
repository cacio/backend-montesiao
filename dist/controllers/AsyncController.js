"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientesControllers_1 = __importDefault(require("./ClientesControllers"));
const CondicoesPagamentoController_1 = __importDefault(require("./CondicoesPagamentoController"));
const ProdutoControllers_1 = __importDefault(require("./ProdutoControllers"));
const DuplicReceberControllers_1 = __importDefault(require("./DuplicReceberControllers"));
const moment_1 = __importDefault(require("moment"));
exports.default = {
    async asyncClientes(request, response) {
        const { lastPulledVersion } = request.query;
        let dataFormatted = "";
        console.log(lastPulledVersion);
        if (lastPulledVersion != "0") {
            //console.log('entro aqui');
            const datalastpull = new Date(Number(lastPulledVersion));
            let formattedDate = ((0, moment_1.default)(datalastpull)).format('YYYY-MM-DD HH:mm:ss');
            dataFormatted = formattedDate;
        }
        else {
            //console.log('entro aqui 2');
            const datalastpull = new Date();
            let formattedDate = ((0, moment_1.default)(datalastpull)).format('YYYY-MM-DD');
            //console.log(formattedDate);
            dataFormatted = formattedDate + ' 00:00:00';
        }
        //console.log("data formatada: "+dataFormatted);
        /*Dados de Cliente*/
        const updated = await ClientesControllers_1.default.ListaClienteAlterado(String(dataFormatted));
        const created = await ClientesControllers_1.default.ListaClientesCriado(String(dataFormatted));
        const clientes = {
            created,
            updated,
            deleted: [],
        };
        /*Dados de Produto*/
        const updateProduto = await ProdutoControllers_1.default.ListaProdutoAlterado(String(dataFormatted));
        const createdProduto = await ProdutoControllers_1.default.ListaProdutoCriado(String(dataFormatted));
        const produtos = {
            created: createdProduto,
            updated: updateProduto,
            deleted: [],
        };
        /*
          Dados de condiçoes de pagamento
        */
        const updateCondicoespagamento = await CondicoesPagamentoController_1.default.ListaProdutoAlterado(String(dataFormatted));
        const createCondicoespagamento = await CondicoesPagamentoController_1.default.ListaCondicoesPagamentoCriado(String(dataFormatted));
        const condicoes_pagamento = {
            created: createCondicoespagamento,
            updated: updateCondicoespagamento,
            deleted: [],
        };
        /**
          Dados de Duplictas a receber
        */
        const updateDuplicReceber = await DuplicReceberControllers_1.default.ListaDuplicReceberAlterado(String(dataFormatted));
        const createDuplicReceber = await DuplicReceberControllers_1.default.ListaDuplicReceberCriado(String(dataFormatted));
        const duplic_receber = {
            created: createDuplicReceber,
            updated: updateDuplicReceber,
            deleted: [],
        };
        return response.status(200).json({
            latestVersion: new Date().getTime(),
            changes: {
                clientes,
                produtos,
                condicoes_pagamento,
                duplic_receber
            }
        });
    },
};
