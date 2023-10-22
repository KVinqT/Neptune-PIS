import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import authRouter from "./src/routers/authRouter";
import doctorRouter from "./src/routers/doctorRouter";
import departmentRouter from "./src/routers/departmentRouter";

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", authRouter);
app.use("/doctors", doctorRouter);
app.use("/departments", departmentRouter);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
