import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { checkAuth } from "../utils/auth";
import { doctor } from "../db";

const departmentRouter = express.Router();

departmentRouter.get("/", checkAuth, async (req: Request, res: Response) => {
  return res.send(doctor);
});

export default departmentRouter;
