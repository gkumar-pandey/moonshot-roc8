import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());
connectDB();

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
