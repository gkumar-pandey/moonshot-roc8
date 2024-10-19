import { Router } from "express";
import authRoutes from "./auth.route.js";
import dataRoutes from "./data.route.js";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/data", dataRoutes);

export default routes;
