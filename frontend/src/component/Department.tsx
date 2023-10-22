// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { DoctorContext } from "@/contexts/DoctorContext";
import DepartmentCard from "@/Cards/DepartmentsCard";

export interface Icon {
  type: React.ComponentType<any>;
  color: string;
  size: number;
}
export interface Departments {
  id: number;
  name: string;
  // icon: Icon;
}

const Department = () => {
  const { allDepartment } = useContext(DoctorContext);
  console.log("all department", allDepartment);
  if (!allDepartment) return null;

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
        {allDepartment.map((i: Departments) => {
          // const ActivateIcon = i.icon.type;
          return (
            <div key={i.id}>
              <DepartmentCard id={i.id} name={i.name} />
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
