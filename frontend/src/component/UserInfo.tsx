import TextField from "@mui/material/TextField/TextField";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";

const UserInfo = () => {
  return (
    <div>
      <div className="mt-10">
        <p className="font-semibold text-lg">Patient's Information</p>
      </div>
      <div>
        <div className="mt-10">
          <TextField
            id="outlined-basic"
            label="Patient's Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "49%" }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={{ width: "49%" }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            sx={{ width: "49%" }}
          />
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            sx={{ width: "49%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
