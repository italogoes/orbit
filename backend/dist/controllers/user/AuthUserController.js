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
exports.AuthUserController = void 0;
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.KEY_SECRET;
class AuthUserController {
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield UserModel_1.default.findOne({ where: { email: email } });
                if (!user) {
                    return res.status(404).json({ message: "Usuário não existe" });
                }
                const passwordMatch = yield bcryptjs_1.default.compare(password, user.password);
                if (!passwordMatch) {
                    return res.status(401).json({ message: "Senha incorreta" });
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
                return res.status(200).json({ message: "Login bem sucedido!", token });
            }
            catch (error) {
                return res.status(500).json({ message: "Nao foi possivel efetuar o login", error });
            }
        });
    }
}
exports.AuthUserController = AuthUserController;
