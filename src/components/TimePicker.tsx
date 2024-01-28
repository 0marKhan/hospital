import React, { useState } from "react";
import "./TimePicker.scss";

interface TimePickerProps {
  onTimeSelect: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelect }) => {
  // State to keep track of the selected time, typed as string or null
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times: string[] = [
    "7:00 am",
    "8:00 am",
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
  ];

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time); // Use the callback here
  };

  return (
    <div className="time-picker">
      <div className="column">
        {times.slice(0, 4).map((time) => (
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
        {times.slice(4, 8).map((time) => (
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
        {times.slice(8).map((time) => (
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
