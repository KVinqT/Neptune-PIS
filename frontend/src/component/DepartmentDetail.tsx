import { DoctorContext } from "@/contexts/DoctorContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DepartmentDetail = () => {
  const params = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const [notShow, setNotShow] = useState(true);
  const departmentId = Number(params.id as string);
  const { allDoctorByEachDepartment, fetchAllDoctor } =
    useContext(DoctorContext);
  useEffect(() => {
    if (accessToken) {
      fetchAllDoctor(departmentId);
      setNotShow(true);
    }
  }, [accessToken]);
  if (notShow) return null;
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
