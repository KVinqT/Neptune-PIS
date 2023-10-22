import { Input } from "@/components/ui/input";
import NormalCard from "./Cards/NormalCard";
import DoctorCard from "./Cards/DoctorCard";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { DoctorContext } from "./contexts/DoctorContext";
import TopBar from "./component/Layout/TopBar";
import SideBar from "./component/Layout/SideBar";

export default function Home() {
  const doctorContext = useContext(DoctorContext);
  const todayDate = dayjs().format("DD-MM-YYYY");
  console.log(todayDate);
  const {
    updateDoctor,
    activeDoctorFetch,
    name,
    experience,
    education,
    department,
  } = doctorContext;
  useEffect(() => {
    activeDoctorFetch(todayDate);
  }, [todayDate]);
  return (
    <div className="w-full h-full">
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className="w-full h-[100vh]">
          <div className="flex justify-evenly">
            <NormalCard title="Departments" />
            <NormalCard title="Find Doctors" />
            <NormalCard title="Appointments" />
            <NormalCard title="Patient Lists" />
          </div>
          <div className="w-[250px] mt-6 md:ml-24">
            <Input
              className="border-black bg-[#F5F7FB] focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <div>
            <div className="w-[200px] mt-6 md:ml-24">
              <p className="text-lg font-semibold">Today's active doctors</p>
              <div className="w-[200px] bg-[#5068E9] h-[2px] mt-2"></div>
            </div>
            <div className="flex justify-around mt-6">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
