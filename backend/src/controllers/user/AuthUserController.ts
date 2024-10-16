import UserModel from "../../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET: any = process.env.KEY_SECRET;

export class AuthUserController {
    static async loginUser(req: any, res: any) {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ where: { email: email } })

            if (!user) {
                return res.status(404).json({ message: "Usuário não existe" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if(!passwordMatch){
                return res.status(401).json({ message: "Senha incorreta" });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: "1h" }
            );

            return res.status(200).json({ message: "Login bem sucedido!", token})
        } catch (error) {
            return res.status(500).json({ message: "Nao foi possivel efetuar o login", error})
        }
    }
}