import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/login", loginController);
authRoutes.post("/signup", signupController);

export default authRoutes;
