import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const checkAuthReception = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) return res.send(401);
  try {
    const accessToken = authorization.split(" ")[1];
    const user = jwt.verify(accessToken, config.jwtSecretReception);
    //@ts-ignore
    req["name"] = user.name;
    next();
  } catch (err) {
    res.sendStatus(401);
    console.log(err);
  }
};

export const checkAuthPatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) return res.send(401);
  try {
    const accessToken = authorization.split(" ")[1];
    const user = jwt.verify(accessToken, config.jwtSecretPatient);
    //@ts-ignore
    req["email"] = user.name;
    next();
  } catch (err) {
    res.sendStatus(401);
    console.log(err);
  }
};
