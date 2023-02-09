"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosController_1 = __importDefault(require("./controllers/UsuariosController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const AuthMiddleware_1 = __importDefault(require("./middlewares/AuthMiddleware"));
const ClientesControllers_1 = __importDefault(require("./controllers/ClientesControllers"));
const AsyncController_1 = __importDefault(require("./controllers/AsyncController"));
const ProdutoControllers_1 = __importDefault(require("./controllers/ProdutoControllers"));
const CondicoesPagamentoController_1 = __importDefault(require("./controllers/CondicoesPagamentoController"));
const DuplicReceberControllers_1 = __importDefault(require("./controllers/DuplicReceberControllers"));
const PedidoController_1 = __importDefault(require("./controllers/PedidoController"));
const routes = (0, express_1.Router)();
/*
* Usuario
*/
routes.get('/usuarios', UsuariosController_1.default.Index);
routes.get('/usuarios/:id', AuthMiddleware_1.default, UsuariosController_1.default.show);
routes.post('/usuarios/verifica', UsuariosController_1.default.VrificaUsuarioCNPJ);
routes.post('/usuarios', UsuariosController_1.default.create);
routes.post('/usuarios/async', UsuariosController_1.default.asyncupdate);
routes.post('/auth', AuthController_1.default.Authenticate);
/*
* Clientes
*/
routes.get('/clientes/:cnpj_emp', ClientesControllers_1.default.index);
routes.get('/clientes/sync/pull', AsyncController_1.default.asyncClientes);
routes.post('/clientes/repre', ClientesControllers_1.default.indexRepresentante);
routes.post('/clientes', ClientesControllers_1.default.create);
/*
* Produtos
*/
routes.post('/produtos', ProdutoControllers_1.default.create);
/*
*  Condições de pagamento
*/
routes.post('/condicoes_pagamento', CondicoesPagamentoController_1.default.create);
/*
*   Duplic receber
*/
routes.get('/duplicreceber', DuplicReceberControllers_1.default.Index);
routes.post('/duplicreceber', DuplicReceberControllers_1.default.create);
/*
* Pedido
*/
routes.post('/pedido/async', PedidoController_1.default.AsyncCreate);
exports.default = routes;
