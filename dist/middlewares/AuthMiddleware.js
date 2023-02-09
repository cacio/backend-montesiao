"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.sendStatus(401);
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, 'Pr0d@5Iq');
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (error) {
        return res.sendStatus(401);
    }
}
exports.default = AuthMiddleware;
