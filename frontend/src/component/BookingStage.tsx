// PassportStepper.tsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopBar from "./Layout/TopBar";
import SideBar from "./Layout/SideBar";
import AppointmentInfo from "./AppointmentInfo";
import ConfirmAndReview from "./ConfirmAndReview";
import UserInfo from "./UserInfo";

const steps = ["Appointment Info", "Patient Info", "Review and Confirm"];

const BookingStage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box>
      <TopBar />
      <div className="flex">
        <SideBar />
        <Box sx={{ margin: "0 auto", mt: 5, width: "70%", height: "full" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 && <AppointmentInfo />}
              {activeStep === 1 && <UserInfo />}
              {activeStep === 2 && <ConfirmAndReview />}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep < 2 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button>Finish</Button>
              )}
            </Box>
          </>
        </Box>
      </div>
    </Box>
  );
};

export default BookingStage;
