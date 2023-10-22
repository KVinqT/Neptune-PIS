import express, { Request, Response } from "express";
import { checkAuth } from "../utils/auth";
import { doctor } from "../db/doctorData";

const doctorRouter = express.Router();

doctorRouter.get("/", checkAuth, (req: Request, res: Response) => {
  const today = req.query.today;
  const todayDate = String(today);
  console.log(todayDate);
  if (!todayDate) return res.sendStatus(400).send("Bad request");
  const todayDoctor = doctor.filter((item) =>
    item.availability.filter((item) => item.date === todayDate)
  );
  console.log(todayDoctor);
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

doctorRouter.get("/:id", checkAuth, (req: Request, res: Response) => {
  const doctorId = Number(req.params.id as unknown as string);
  const doctorDetail = doctor.filter((item) => item.id === doctorId);
  console.log(doctorDetail);
  res.send({ oneDoctor: doctorDetail });
});
export default doctorRouter;
