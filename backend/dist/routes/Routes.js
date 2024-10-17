"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Middlewares
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
// Controllers
const RegisterUserController_1 = require("../controllers/user/RegisterUserController");
const AuthUserController_1 = require("../controllers/user/AuthUserController");
const router = (0, express_1.Router)();
// User Routes
router.get('/api/user', AuthMiddleware_1.AuthMiddleware, RegisterUserController_1.RegisterUserController.getUser);
router.post('/api/user', RegisterUserController_1.RegisterUserController.createUser);
router.post('/api/login', AuthUserController_1.AuthUserController.loginUser);
exports.default = router;
