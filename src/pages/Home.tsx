import React from "react";
import Calendar from "../components/Calendar";

import "./Home.scss";
import TimePicker from "../components/TimePicker";

const Home = () => {
  return (
    <div className="home-container">
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="time-picker">
        <TimePicker />
      </div>
    </div>
  );
};

export default Home;
