import { Router } from "express";
// Middlewares
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
// Controllers
import { RegisterUserController } from "../controllers/user/RegisterUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";

const router = Router();

router.get('/user', AuthMiddleware, RegisterUserController.getUser);
router.post('/user', RegisterUserController.createUser);

export default router;