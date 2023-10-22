import express, { Request, Response } from "express";
import { checkAuth } from "../utils/auth";
import { doctor } from "../db/doctorData";

const doctorRouter = express.Router();

doctorRouter.get("/", checkAuth, (req: Request, res: Response) => {
  const todayDate = req.query.today;
  if (!todayDate) return res.sendStatus(400).send("Bad request");
  const todayDoctor = doctor.filter((item) =>
    item.availability.filter((item) => item.date === todayDate)
  );
  const name = todayDoctor.map((item) => item.name);
  const department = todayDoctor.map((item) => item.department);
  const experience = todayDoctor.map((item) => item.experience);
  const education = todayDoctor.map((item) => item.education);
  const availability = todayDoctor.map((item) => item.availability);
  res.send({
    name,
    department,
    experience,
    education,
    availability,
  });
});

export default doctorRouter;
