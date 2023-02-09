"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientes1639675512009 = void 0;
const typeorm_1 = require("typeorm");
class createClientes1639675512009 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "clientes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: 'CODIGO',
                    type: 'varchar'
                },
                {
                    name: 'CNPJ_CPF',
                    type: 'varchar'
                },
                {
                    name: 'NOME',
                    type: 'varchar'
                },
                {
                    name: 'ENDERECO',
                    type: 'varchar'
                },
                {
                    name: 'BAIRRO',
                    type: 'varchar'
                },
                {
                    name: 'CEP',
                    type: 'varchar'
                },
                {
                    name: 'CIDADE',
                    type: 'varchar'
                },
                {
                    name: 'ESTADO',
                    type: 'varchar'
                },
                {
                    name: 'TELEFONE',
                    type: 'varchar'
                },
                {
                    name: 'INSCRICAO',
                    type: 'varchar'
                },
                {
                    name: 'ATIVO',
                    type: 'varchar'
                },
                {
                    name: 'CONTA_CTB',
                    type: 'varchar'
                },
                {
                    name: 'MOSTRA_FATURAS',
                    type: 'varchar'
                },
                {
                    name: 'PRAZO1',
                    type: 'integer'
                },
                {
                    name: 'PRAZO2',
                    type: 'integer'
                },
                {
                    name: 'PRAZO3',
                    type: 'integer'
                },
                {
                    name: 'PRAZO4',
                    type: 'integer'
                },
                {
                    name: 'PRAZO5',
                    type: 'integer'
                },
                {
                    name: 'COND_VENDAS',
                    type: 'varchar'
                },
                {
                    name: 'REPRESENTANTE',
                    type: 'varchar'
                },
                {
                    name: 'FANTASIA',
                    type: 'varchar'
                },
                {
                    name: 'RESTRICAO',
                    type: 'varchar'
                },
                {
                    name: 'TABELA_PRECOS',
                    type: 'varchar'
                },
                {
                    name: 'CONTATO',
                    type: 'varchar'
                },
                {
                    name: 'E_MAIL',
                    type: 'varchar'
                },
                {
                    name: 'FAX',
                    type: 'varchar'
                },
                {
                    name: 'COND_PAG',
                    type: 'varchar'
                },
                {
                    name: 'LIMITE',
                    type: 'varchar'
                },
                {
                    name: 'SEGMENTO',
                    type: 'varchar'
                },
                {
                    name: 'GERARBOLETO',
                    type: 'varchar'
                },
                {
                    name: 'PESSOA',
                    type: 'varchar'
                },
                {
                    name: 'END_ENTREGA',
                    type: 'varchar'
                },
                {
                    name: 'BAIRRO_ENTREGA',
                    type: 'varchar'
                },
                {
                    name: 'CIDADE_ENTREGA',
                    type: 'varchar'
                },
                {
                    name: 'UF_ENTREGA',
                    type: 'varchar'
                },
                {
                    name: 'CEP_ENTREGA',
                    type: 'varchar'
                },
                {
                    name: 'END_COB',
                    type: 'varchar'
                },
                {
                    name: 'BAIRRO_COB',
                    type: 'varchar'
                },
                {
                    name: 'CIDADE_COB',
                    type: 'varchar'
                },
                {
                    name: 'UF_COB',
                    type: 'varchar'
                },
                {
                    name: 'CEP_COB',
                    type: 'varchar'
                },
                {
                    name: 'CELULAR',
                    type: 'varchar'
                },
                {
                    name: 'REGI',
                    type: 'varchar'
                },
                {
                    name: 'PAIS',
                    type: 'varchar'
                },
                {
                    name: 'E_MAILNFE',
                    type: 'varchar'
                },
                {
                    name: 'BOLETAO',
                    type: 'varchar'
                },
                {
                    name: 'PLACAVEICULO',
                    type: 'varchar'
                },
                {
                    name: 'PLACAVEICULOUF',
                    type: 'varchar'
                },
                {
                    name: 'ANTT',
                    type: 'varchar'
                },
                {
                    name: 'GERALOGIN',
                    type: 'varchar'
                },
                {
                    name: 'BLOQUEADO_SN',
                    type: 'varchar'
                },
                {
                    name: 'MOTIVO_BLOQUEIO',
                    type: 'varchar'
                },
                {
                    name: 'OBS',
                    type: 'varchar'
                },
                {
                    name: 'OBS_SAINOTA',
                    type: 'varchar'
                },
                {
                    name: 'foto',
                    type: 'varchar'
                },
                {
                    name: "cnpj_emp",
                    type: 'varchar'
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('clientes');
    }
}
exports.createClientes1639675512009 = createClientes1639675512009;
