import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/date-and-time-page">Make an Appointment</Link>
    </>
  );
};

export default Home;
