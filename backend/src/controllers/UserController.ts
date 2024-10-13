import { Request, Response } from "express";
import UserModel from "../models/UserModel";

export class UserController {
    static async getUser(req: Request, res: Response){
        const user = await UserModel.findAll();
        res.json(user)
    }

    static async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const user = await UserModel.create({name, email, password});
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: "Erro ao cadastrar usuário. " + error})   
        }
        
    }
}