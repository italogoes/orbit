import { Router } from "express";
// Middlewares
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
// Controllers
import { RegisterUserController } from "../controllers/user/RegisterUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";

const router = Router();

// User Routes
router.get('/api/user', AuthMiddleware, RegisterUserController.getUser);
router.post('/api/user', RegisterUserController.createUser);
router.post('/api/login', AuthUserController.loginUser)



export default router;