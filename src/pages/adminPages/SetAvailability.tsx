import React, { useState } from "react";
import "./SetAvailability.scss";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Calendar from "../../components/Calendar";
import TimePicker from "../../components/TimePicker";
import Button from "@mui/material/Button";

const SetAvailability = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <div>
      <AdminNavbar />
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
          Select a date and time, then click on set as available
        </h3>
        <div className="next-buttons">
          <Button
            style={{ backgroundColor: "#1976d2", color: "#fff" }}
            variant="contained"
          >
            SET AS AVAILABLE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetAvailability;
