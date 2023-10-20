import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

const authRouter = express.Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username && !password) return res.sendStatus(400);
  const receptionName = "reception1";
  const receptionPassword = "receptioncounter1";
  const patientName = "reception1";
  const patientPassword = "receptioncounter1";

  if (username === receptionName && password === receptionPassword) {
    const accessToken = jwt.sign(username, config.jwtSecretReception);
    return res.send({ accessToken });
  } else if (username === patientName && password === patientPassword) {
    const accessToken = jwt.sign(username, config.jwtSecretPatient);
    return res.send({ accessToken });
  } else return res.sendStatus(401);
});

export default authRouter;
