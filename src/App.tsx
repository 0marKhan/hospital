import React, { useState } from "react";

import "./App.css";
import LoginUser from "./pages/LoginUser";
import LoginAdmin from "./pages/LoginAdmin";
import SignUp from "./pages/SignUp";
import DateAndTimePage from "./pages/DateAndTimePage";
import MakeAppointment from "./pages/MakeAppointment";
import Payment from "./pages/Payment";
import StepperCom from "./components/StepperComp";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import AdminHome from "./pages/adminPages/AdminHome";
import SetAvailability from "./pages/adminPages/SetAvailability";
import PatientAppointments from "./pages/adminPages/PatientAppointments";
import SignUpAdmin from "./pages/SignUpAdmin";

import { Route, Routes, useLocation } from "react-router-dom";

// function App() {

const AppointmentProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const location = useLocation();

  const showStepper =
    location.pathname === "/make-appointment" ||
    location.pathname === "/payment" ||
    location.pathname === "/confirmation";

  return (
    <>
      {showStepper && (
        <StepperCom activeStep={activeStep} setActiveStep={setActiveStep} />
      )}
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-admin" element={<SignUpAdmin />} />
        <Route path="/date-and-time-page" element={<DateAndTimePage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/availability" element={<SetAvailability />} />
        <Route path="/patient-appointments" element={<PatientAppointments />} />
        <Route
          path="/make-appointment"
          element={<MakeAppointment setActiveStep={setActiveStep} />}
        />
        <Route
          path="/payment"
          element={<Payment setActiveStep={setActiveStep} />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
};

export default AppointmentProcess;
