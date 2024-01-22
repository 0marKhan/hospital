import React from "react";
import { useLocation } from "react-router-dom";
import StepperComp from "../components/StepperComp";

import "./MakeAppointment.scss";

const MakeAppointment = () => {
  const location = useLocation();
  const { date } = location.state || new Date();

  return (
    <div>
      <div className="stepper-container">
        <StepperComp />
      </div>
      <p>Selected Date: {date.toString()}</p>
    </div>
  );
};

export default MakeAppointment;
