import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) return res.send(401);
  console.log(authorization);
  try {
    const accessToken = authorization.split(" ")[1];
    const validate =
      jwt.verify(accessToken, config.jwtSecretPatient) ||
      jwt.verify(accessToken, config.jwtSecretReception);
    //@ts-ignore
    // req["name"] = user.name;
    if (validate) next();
  } catch (err) {
    res.sendStatus(401);
    console.log(err);
  }
};
