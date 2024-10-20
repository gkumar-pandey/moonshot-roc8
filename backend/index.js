import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());
connectDB();

app.use("/", (req, res) => {
  res.status(200).json("Server is Running...");
});

app.use("/api/v1", routes);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
