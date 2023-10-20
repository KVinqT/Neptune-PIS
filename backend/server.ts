import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import authRouter from "./src/routers/authRouter";

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
