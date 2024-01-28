import React, { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import "./Calendar.scss";

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const startYear = currentDate.getFullYear();
  const endYear = startYear + 5;

  // State to track the currently visible year and month
  const [visibleYear, setVisibleYear] = useState(startYear);
  const [visibleMonth, setVisibleMonth] = useState(currentDate.getMonth());
  // Add a state to track the selected date
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

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

  // Function to handle date selection
  const handleDateClick = (day: number, month: number, year: number) => {
    setSelectedDate(new Date(year, month, day));
  };

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

    // Check if the current month and year match the visible month and year
    const isCurrentMonth =
      currentDate.getFullYear() === year && currentDate.getMonth() === month;

    return (
      <div>
        <table className="table-container">
          <thead>
            <tr className="table-days">
              {daysOfWeek.map((day) => (
                <th className="day-heading" key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(days.length / 7) }).map((_, i) => (
              <tr key={i}>
                {days.slice(i * 7, (i + 1) * 7).map((day, index) => {
                  const isSelected =
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getFullYear() === year;

                  return (
                    <td key={index}>
                      {day !== null && (
                        <span
                          className={`date-number ${
                            isSelected ? "selected-day" : ""
                          }`}
                          onClick={() => handleDateClick(day, month, year)}
                        >
                          {day}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="month-display">
        <HiOutlineArrowSmLeft
          onClick={goToPrevMonth}
          style={{ cursor: "pointer", fontSize: "2rem" }}
        />
        <h2 className="month-title">
          {monthsOfYear[visibleMonth]} {visibleYear}
        </h2>
        <HiOutlineArrowSmRight
          onClick={goToNextMonth}
          style={{ cursor: "pointer", fontSize: "2rem" }}
        />
      </div>
      {renderMonth(visibleYear, visibleMonth)}
    </div>
  );
};

export default Calendar;
