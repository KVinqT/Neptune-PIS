import { doctor } from "@/db/doctorData";
import { useParams } from "react-router-dom";

const DepartmentDetail = () => {
  const params = useParams();
  const departmentId = Number(params.id as string);
  const doctorFromDepartment = doctor.filter(
    (item) => item.departmentId === departmentId
  );
  return (
    <div>
      <p>departmentId</p>
      <div>{doctorFromDepartment.map((item) => item.name)}</div>
    </div>
  );
};

export default DepartmentDetail;
