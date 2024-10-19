import { Router } from "express";
import authRoutes from "./auth.route.js";

const routes = Router();

routes.use("/auth", authRoutes);

export default routes;
