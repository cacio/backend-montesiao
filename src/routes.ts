import {Router} from 'express';
import UsuariosController from './controllers/UsuariosController';
import AuthController from './controllers/AuthController';
import AuthMiddleware from './middlewares/AuthMiddleware';
import ClientesControllers from './controllers/ClientesControllers';
import AsyncController from './controllers/AsyncController';
import ProdutoControllers from './controllers/ProdutoControllers';
import CondicoesPagamentoController from './controllers/CondicoesPagamentoController';
import DuplicReceberControllers from './controllers/DuplicReceberControllers';
import PedidoController from './controllers/PedidoController';
import IntegracaoErpController from './controllers/IntegracaoErpController';
import TotalNotaEntrada from './controllers/TotalNotaEntrada';

const routes = Router();

/*
* Usuario
*/
routes.get('/usuarios',UsuariosController.Index);
routes.get('/usuarios/:id',AuthMiddleware,UsuariosController.show);
routes.post('/usuarios/verifica',UsuariosController.VrificaUsuarioCNPJ);
routes.post('/usuarios', UsuariosController.create);
routes.post('/usuarios/async', UsuariosController.asyncupdate);
routes.post('/auth', AuthController.Authenticate);

/*
* Clientes
*/
routes.get('/clientes/:cnpj_emp',ClientesControllers.index);
routes.get('/clientes/sync/pull',AsyncController.asyncClientes);
routes.get('/clientes/search/:cnpj_emp',ClientesControllers.searchCliente);
routes.post('/clientes/repre',ClientesControllers.indexRepresentante);
routes.post('/clientes', ClientesControllers.create);

/*
* Produtos
*/
routes.post('/produtos',ProdutoControllers.create);
routes.get('/produtos/search/:cnpj_emp',ProdutoControllers.searchProduct);


/*
*  Condições de pagamento
*/
routes.post('/condicoes_pagamento',CondicoesPagamentoController.create);

/*
*   Duplic receber 
*/
routes.get('/duplicreceber',DuplicReceberControllers.Index);
routes.post('/duplicreceber', DuplicReceberControllers.create);

/*
* Pedido
*/
routes.post('/pedido/async', PedidoController.AsyncCreate);
routes.post('/pedido/handllercreate/:cnpj_emp', PedidoController.create);
routes.get('/pedido/HandllerPushPedidoRetaguarda/:cnpj_emp', PedidoController.HandllerPushPedidoRetaguarda);
/**
 * Pedido ERP 
 */

routes.post('/integracaopedidoerp', IntegracaoErpController.create);

/**
 * Total nota entrada
 */
routes.get('/totalnotaentrada/:numerosemana/:cnpj_emp', TotalNotaEntrada.handllerGetTotalNotaEntrada);
routes.post('/totalnotaentrada', TotalNotaEntrada.HandllercreateUpdate);
export default routes;