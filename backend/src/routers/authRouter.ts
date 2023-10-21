import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

const authRouter = express.Router();

authRouter.post("/", async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  if (!userName && !password) return res.sendStatus(400);
  const receptionName = "reception1";
  const receptionPassword = "receptioncounter1";
  const patientName = "patient1";
  const patientPassword = "patient1";

  if (userName === receptionName && password === receptionPassword) {
    const accessToken = jwt.sign(userName, config.jwtSecretReception);
    return res.send({ accessToken });
  } else if (userName === patientName && password === patientPassword) {
    const accessToken = jwt.sign(userName, config.jwtSecretPatient);
    return res.send({ accessToken });
  } else return res.sendStatus(401);
});

export default authRouter;
