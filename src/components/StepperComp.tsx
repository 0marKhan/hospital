import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const steps = ["Date and Time", "Payment Information", "Confirm"];

interface StepperCompProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperComp: React.FC<StepperCompProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const navigate = useNavigate();

  // None of the steps are optional
  const isStepOptional = (step: number) => {
    return false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => {
      const newActiveStep = prevActiveStep + 1;

      // Navigate to different pages based on the step
      if (newActiveStep === 1) {
        navigate("/payment");
      } else if (newActiveStep === 2) {
        navigate("/confirmation");
      }

      return newActiveStep;
    });

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const newActiveStep = prevActiveStep - 1;

      // Navigate to different pages based on the step
      if (newActiveStep === 0) {
        navigate("/make-appointment");
      } else if (newActiveStep === 1) {
        navigate("/payment");
      }

      return newActiveStep;
    });
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <>
      <div style={{ margin: "1rem 1.5rem 2rem 0rem", textAlign: "end" }}>
        <Link
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
          to="/date-and-time-page"
        >
          Previous Page
        </Link>
      </div>
      <Box sx={{ width: "100%", color: "white" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      color: "white !important",
                      "&.Mui-completed": { color: "white !important" },
                      "&.Mui-active": { color: "white !important" },
                      "@media (max-width:440px)": {
                        fontSize: "0.75rem",
                      },
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, color: "white" }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
};

export default StepperComp;
