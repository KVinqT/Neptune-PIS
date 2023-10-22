import express, { Request, Response } from "express";
import { checkAuth } from "../utils/auth";
import { doctor } from "../db/doctorData";
import { departments } from "../db/departmentData";

const departmentRouter = express.Router();

departmentRouter.get("/", checkAuth, (req: Request, res: Response) => {
  const allDepartment = departments;

  res.send({ allDepartment: departments });
});

departmentRouter.get("/:id", checkAuth, (req: Request, res: Response) => {
  const departmentId = Number(req.params.id as unknown as string);
  const doctorDetail = doctor.filter(
    (item) => item.departmentId === departmentId
  );
  console.log(doctorDetail);
  res.send({ allDoctor: doctorDetail });
});

export default departmentRouter;
