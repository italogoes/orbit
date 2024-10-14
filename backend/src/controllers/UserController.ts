import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET: any = process.env.KEY_SECRET;

export class UserController {
    static async getUser(req: Request, res: Response){
        const user = await UserModel.findAll();
        res.json(user)
    }

    static async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const hashPassword = await bcrypt.hash(password, 10);

            const user = await UserModel.create({ name, email, password: hashPassword });

            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })

            res.status(201).json({message: 'Usuário cadastrado com sucesso!', token})
        } catch (error) {
            res.status(400).json({ error: "Erro ao cadastrar usuário. " + error})   
        }
        
    }
}