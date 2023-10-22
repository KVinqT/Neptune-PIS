import { DoctorContext } from "@/contexts/DoctorContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const handleRoute = (id: number) => {
    navigate(`/doctors/${id}`);
  };
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
          return (
            <div
              className="bg-red-200 w-20 h-20"
              key={i.id}
              onClick={() => handleRoute(i.id)}
            >
              {i.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentDetail;
