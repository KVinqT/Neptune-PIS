import { departments } from "@/db/departmentData";
import DepartmentCard from "@/Cards/DepartmentsCard";
import { IconProps } from "@mui/material";

export interface Icon {
  type: React.ComponentType<IconProps>;
  color: string;
  size: number;
}
export interface Departments {
  id: number;
  name: string;
  icon: Icon;
  route: string;
}

const Department = () => {
  return (
    <div className="flex flex-col">
      <h1>Departments</h1>
      <div className="flex flex-row flex-wrap justify-between w-1/2">
        {departments.map((item: Departments) => {
          return (
            <div key={item.id}>
              <DepartmentCard
                name={item.name}
                icon={item.icon}
                route={item.route}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Department;
