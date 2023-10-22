import { AiOutlineHome } from "react-icons/ai";
import { FaRegHospital } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import NormalCard from "./Cards/NormalCard";
import DoctorCard from "./Cards/DoctorCard";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { DoctorContext } from "./contexts/DoctorContext";

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
      <div className="md:h-[13vh] bg-[#F5F7FB] shadow-lg">
        <img
          className="w-[86px] m-auto border"
          src="https://cdn.discordapp.com/attachments/1158254691919077387/1164980252473307217/IMG_8985.jpg?ex=65452f68&is=6532ba68&hm=993fd57b7d135af309e3053ebeda10f51b61aa89747c9220b4de65b7dbc8a6ff&"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="bg-[#5068E9] text-white w-[200px] h-[100vh] inline text-xl font-semibold flex-col cursor-pointer ">
          <div className="mt-8">
            <div className="flex items-center justify-center md:hover:bg-[#96a5f6] w-[80%] m-auto p-2 rounded-xl duration-150">
              <div className="mr-2">
                <AiOutlineHome />
              </div>
              <p>Home</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center md:hover:bg-[#96a5f6] w-[80%] m-auto px-10 py-3 rounded-xl duration-150">
              <div className="mr-2">
                <FaRegHospital />
              </div>
              <p>Department</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center md:hover:bg-[#96a5f6] w-[80%] m-auto p-2 rounded-xl duration-150">
              <div className="mr-2">
                <CiMedicalCross />
              </div>
              <p>Doctor</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center md:hover:bg-[#96a5f6] w-[80%] m-auto p-2 rounded-xl duration-150">
              <div className="mr-2">
                <BiSolidBed />
              </div>
              <p>Rooms</p>
            </div>
          </div>
        </div>
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
