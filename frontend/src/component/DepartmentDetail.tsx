import { DoctorContext } from "@/contexts/DoctorContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DepartmentDetail = () => {
  const params = useParams();
  const accessToken = localStorage.getItem("accessToken");

  const departmentId = Number(params.id as string);
  const { allDoctorByEachDepartment, fetchAllDoctor } =
    useContext(DoctorContext);
  useEffect(() => {
    if (accessToken) {
      fetchAllDoctor(departmentId);
    }
  }, [accessToken, allDoctorByEachDepartment]);
  if (!allDoctorByEachDepartment) return null;
  return (
    <div>
      <p>{departmentId}</p>
      <div>
        {allDoctorByEachDepartment.map((i) => {
          return <div key={i.id}>{i.name}</div>;
        })}
      </div>
    </div>
  );
};

export default DepartmentDetail;
