import React, { useState } from "react";
import "./TimePicker.scss";

interface TimePickerProps {
  onTimeSelect: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times: string[] = [
    "10:00 am",
    "11:30 am",
    "1:00 pm",
    "2:30 pm",
    "4:00 pm",
    "10:30 am",
    "12:00 pm",
    "1:30 pm",
    "3:00 pm",
    "4:30 pm",
    "11:00 am",
    "12:30 pm",
    "2:00 pm",
    "3:30 pm",
    "5:00 pm",
  ];

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <div className="time-picker">
      <div className="column">
        {times.slice(0, 5).map((time) => (
          <div
            key={time}
            className={`row ${selectedTime === time ? "selected" : ""}`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </div>
        ))}
      </div>
      <div className="column">
        {times.slice(5, 10).map((time) => (
          <div
            key={time}
            className={`row ${selectedTime === time ? "selected" : ""}`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </div>
        ))}
      </div>
      <div className="column">
        {times.slice(10).map((time) => (
          <div
            key={time}
            className={`row ${selectedTime === time ? "selected" : ""}`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
