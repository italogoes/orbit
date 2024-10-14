import { Router } from "express";
// Middlewares
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
// Controllers
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/user', AuthMiddleware, UserController.getUser);
router.post('/user', UserController.createUser);

export default router;