import { Router } from "express";
import {
  createDataController,
  getDataController,
} from "../controllers/data.controller.js";

const dataRoutes = Router();

dataRoutes.get("/", getDataController);
dataRoutes.post("/", createDataController);

export default dataRoutes;
