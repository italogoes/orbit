"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserController = void 0;
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.KEY_SECRET;
class RegisterUserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findAll();
            res.json(user);
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                const hashPassword = yield bcryptjs_1.default.hash(password, 10);
                const user = yield UserModel_1.default.create({ name, email, password: hashPassword });
                //const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })
                res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
            }
            catch (error) {
                res.status(400).json({ error: "Erro ao cadastrar usuário. " + error });
            }
        });
    }
}
exports.RegisterUserController = RegisterUserController;
