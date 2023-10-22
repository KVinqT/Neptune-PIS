import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { FaRegHospital } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-[#5068E9] text-white w-[200px] h-[100vh] text-xl font-semibold flex-col cursor-pointer ">
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
  );
};

export default SideBar;
