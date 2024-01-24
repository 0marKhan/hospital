import React, { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const startYear = currentDate.getFullYear();
  const endYear = startYear + 5;

  // State to track the currently visible year and month
  const [visibleYear, setVisibleYear] = useState(startYear);
  const [visibleMonth, setVisibleMonth] = useState(currentDate.getMonth());

  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const monthsOfYear: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goToNextMonth = () => {
    if (visibleYear === endYear && visibleMonth === 11) {
      // Do nothing if it's the last month of the last year
      return;
    }
    if (visibleMonth === 11) {
      setVisibleYear((year) => year + 1);
      setVisibleMonth(0);
    } else {
      setVisibleMonth((month) => month + 1);
    }
  };

  const goToPrevMonth = () => {
    if (visibleYear === startYear && visibleMonth === currentDate.getMonth()) {
      // Do nothing if it's the current month of the current year
      return;
    }
    if (visibleMonth === 0) {
      setVisibleYear((year) => year - 1);
      setVisibleMonth(11);
    } else {
      setVisibleMonth((month) => month - 1);
    }
  };

  const renderMonth = (year: number, month: number): JSX.Element => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const days: (number | null)[] = [];
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(i);
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(days.length / 7) }).map((_, i) => (
              <tr key={i}>
                {days.slice(i * 7, (i + 1) * 7).map((day, index) => (
                  <td key={index}>{day ?? ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <HiOutlineArrowSmLeft
          onClick={goToPrevMonth}
          style={{ cursor: "pointer" }}
        />
        <h2>
          {monthsOfYear[visibleMonth]} {visibleYear}
        </h2>
        <HiOutlineArrowSmRight
          onClick={goToNextMonth}
          style={{ cursor: "pointer" }}
        />
      </div>
      {renderMonth(visibleYear, visibleMonth)}
    </div>
  );
};

export default Calendar;
