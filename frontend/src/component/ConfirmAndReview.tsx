import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const ConfirmAndReview = () => {
  return (
    <div>
      <div className="bg-[#F5F7FB] mt-10 rounded-xl shadow-md">
        <div className="pt-10 m-auto w-[300px]">
          <div className="m-auto w-[50px] p-3 flex items-center justify-center rounded-full bg-[#96a5f6]">
            <CheckIcon />
          </div>
          <p className="flex items-center justify-center mt-4 font-semibold text-md">
            Appointment is ready for scheduled!
          </p>
        </div>
        <div className="p-10 flex justify-around">
          <div className="flex flex-col text-lg font-semibold">
            <p>Name - Chan Myae</p>
            <p>Email - chanmyae@gmail.com</p>
            <p>Phone Number - 09785512389</p>
            <p>Gender - Gay</p>
            <p>D.O.B - 18.2.2002</p>
          </div>
          <div className="bg-[#96a5f6] p-6 rounded-xl shadow-lg">
            <div className="">
              <p className="text-center text-lg font-semibold">
                Booking No - 9
              </p>
            </div>
            <div className="mt-2 text-md ">
              <p>Doctor Pyae Sone</p>
              <p>Monday 23 Oct.2023</p>
              <p>12PM-2:30PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAndReview;
