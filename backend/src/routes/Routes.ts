import { Router } from "express";
// Middlewares
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
// Controllers
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/api/user', AuthMiddleware, UserController.getUser);
router.post('/api/user', UserController.createUser);

export default router;