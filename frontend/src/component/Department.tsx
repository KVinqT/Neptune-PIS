import DepartmentCard from "@/Cards/DepartmentsCard";
import { IconProps } from "@mui/material";
// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useContext, useEffect } from "react";
import { DoctorContext } from "@/contexts/DoctorContext";

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
  const { department, activeDoctorFetch } = useContext(DoctorContext);
  useEffect(() => {
    activeDoctorFetch;
  }, []);
  if (!department) return null;
  // const [searchValue, setSearchValue] = useState("");
  // const [origin, setOrigin] = useState(true);
  // const [search, setSearch] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between m-3">
        <h1>Departments</h1>
        <div className="w-[250px] ">
          <Input
            className="border-black bg-[#F5F7FB] focus:outline-none"
            placeholder="Search..."
            // onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-around "></div>

      <div className="flex flex-row flex-wrap justify-between ">
        {department.map((item: Departments) => {
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
      <div className="flex flex-row flex-wrap justify-between ">
        {/* {!search &&
          departments.filter((item: Departments) => search === item.name)} */}
      </div>
    </div>
  );
};

export default Department;
