"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const TotalNotaEntrada_1 = __importDefault(require("../models/TotalNotaEntrada"));
exports.default = {
    async HandllercreateUpdate(request, response) {
        const { tot_icmsst, vltotnota, numerosemana, cnpj_emp } = request.body;
        console.log(tot_icmsst, vltotnota, numerosemana, cnpj_emp);
        const data = {
            numerosemana,
            tot_icmsst,
            vltotnota,
            cnpj_emp
        };
        const totalnotaRepositoey = (0, typeorm_1.getRepository)(TotalNotaEntrada_1.default);
        const currentData = await totalnotaRepositoey.find({
            where: [
                { numerosemana: numerosemana, cnpj_emp: cnpj_emp },
            ]
        });
        if (currentData.length == 0) {
            const totalnotaentrada = totalnotaRepositoey.create(data);
            await totalnotaRepositoey.save(totalnotaentrada);
        }
        else {
            //console.log(currentData[0].id); 
            await totalnotaRepositoey.createQueryBuilder().update(TotalNotaEntrada_1.default).set(data).where('id=:id', { id: currentData[0].id }).execute();
        }
        return response.status(201).json(data);
    },
    async handllerGetTotalNotaEntrada(request, response) {
        const { numerosemana, cnpj_emp } = request.params;
        const totalnotaRepositoey = (0, typeorm_1.getRepository)(TotalNotaEntrada_1.default);
        const currentData = await totalnotaRepositoey.find({
            where: [
                { numerosemana: numerosemana, cnpj_emp: cnpj_emp },
            ]
        });
        return response.status(200).json(currentData);
    }
};
