import React from "react";
import { useLocation } from "react-router-dom";

import "./MakeAppointment.scss";

interface AppointmentState {
  date: Date;
  time: string;
}

interface MakeAppointmentProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const MakeAppointment: React.FC<MakeAppointmentProps> = ({ setActiveStep }) => {
  const location = useLocation();
  const activeStep = 0;

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
      <div className="user-info">
        <p className="text-row">
          <span className="text-label">Username:</span> Omar Khan
        </p>
        <p className="text-row">
          <span className="text-label">Selected Date:</span> {formatDate(date)}
        </p>
        <p className="text-row">
          <span className="text-label">Selected Time:</span> {time}
        </p>
        <p className="text-row">
          <span className="text-label">Location:</span> Passport Office Rd,
          Phase 5 Hayatabad, Peshawar, Khyber Pakhtunkhwa 25100, Pakistan
        </p>
      </div>
    </div>
  );
};

export default MakeAppointment;
