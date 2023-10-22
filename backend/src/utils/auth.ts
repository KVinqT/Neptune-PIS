import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) return res.send(401);
  try {
    const accessToken = authorization.split(" ")[1];
    const validate = jwt.verify(accessToken, config.jwtSecretPatient);
    if (validate) next();
    //@ts-ignore
    // req["name"] = user.name;
  } catch (err) {
    const accessToken = authorization.split(" ")[1];
    const validate = jwt.verify(accessToken, config.jwtSecretReception);
    if (validate) next();
  }
};
