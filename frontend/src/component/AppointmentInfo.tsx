import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Textarea } from "@/components/ui/textarea";

const AppointmentInfo = () => {
  return (
    <div>
      <div className="bg-[#F5F7FB] mt-10 rounded-xl shadow-md">
        <div className="flex flex-col items-center m-auto pt-10 font-semibold">
          <p className="text-xl">Dr. Blh BLh</p>
          <p className="text-sm mt-4">Brain and Nervous</p>
        </div>
        <div className="flex p-10 justify-evenly">
          <div className="bg-[#96a5f6] w-[220px] flex rounded-lg items-center py-2 px-3 m-auto justify-center">
            <CalendarMonthOutlinedIcon />
            <p className="ml-2">Monday 23.Oct.2023</p>
          </div>
          <div className="bg-[#96a5f6] w-[220px] flex rounded-lg items-cente py-2 px-3 m-auto justify-center">
            <AccessTimeOutlinedIcon />
            <p className="ml-2">12PM-2PM</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Textarea
          placeholder="Health symptoms and problems"
          className="shadow-md"
        />
      </div>
    </div>
  );
};

export default AppointmentInfo;
