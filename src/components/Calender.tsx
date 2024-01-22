import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.css";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface SlotInfo {
  start: Date;
  end: Date;
  slots: Date[] | number[];
  action: "select" | "click" | "doubleClick";
}

const MyCalendar = () => {
  const navigate = useNavigate();
  const handleDayClick = (slotInfo: SlotInfo) => {
    navigate("/make-appointment", { state: { date: slotInfo.start } });
  };

  return (
    <>
      <h1 className="appointment-heading">Appointment Calendar</h1>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px", color: "white" }}
        onSelectSlot={handleDayClick}
        selectable
      />
    </>
  );
};

export default MyCalendar;
