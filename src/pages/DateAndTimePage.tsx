import React, { useState } from "react";
import Calendar from "../components/Calendar";
import TimePicker from "../components/TimePicker";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./DateAndTimePage.scss";
import Navbar from "../components/Navbar";

const DateAndTimePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/make-appointment", {
      state: { date: selectedDate, time: selectedTime },
    });
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="calendar-container">
          <Calendar onDateSelect={setSelectedDate} />
        </div>
        <div className="time-picker">
          <TimePicker onTimeSelect={setSelectedTime} />
        </div>
      </div>
      <div className="bottom-portion">
        <h3 className="proceed-info">
          Select a date and time, then press NEXT to proceed
        </h3>
        <div className="next-buttons">
          <Button variant="contained" onClick={handleNextClick}>
            NEXT
          </Button>
        </div>
      </div>
    </>
  );
};

export default DateAndTimePage;
