import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/user', UserController.getUser);
router.post('/user', UserController.createUser);

export default router;