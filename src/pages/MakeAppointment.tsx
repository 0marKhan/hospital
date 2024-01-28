import React from "react";
import { useLocation } from "react-router-dom";
import StepperComp from "../components/StepperComp";
import "./MakeAppointment.scss";

interface AppointmentState {
  date: Date;
  time: string;
}

const MakeAppointment: React.FC = () => {
  const location = useLocation();

  // Using type assertion for state
  const state = location.state as AppointmentState;
  const { date = new Date(), time = "" } = state ?? {};

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div>
      <div className="stepper-container">
        <StepperComp />
      </div>
      <p>Username: Omar Khan</p>
      <p>Selected Date: {formatDate(date)}</p>
      <p>Selected Time: {time}</p>
    </div>
  );
};

export default MakeAppointment;
