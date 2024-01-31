import React from "react";
import Navbar from "../components/Navbar";

import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

import northwest from "../assets/northwest.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner" style={{ backgroundImage: `url(${northwest})` }}>
        {" "}
      </div>
      <div className="page-body">
        <h1 className="make-appointment-text">Make an appointment today!</h1>
        <div className="appointment-instruction-body">
          <div className="appointment-instruction-row">
            <div className="appointment-instruction-img">
              <FaCalendarAlt style={{ color: "#fff", fontSize: "4rem" }} />
            </div>
            <div className="appointment-instruction-text">
              Pick an available date of your choice from the calendar
            </div>
          </div>
          <div className="appointment-instruction-row">
            <div className="appointment-instruction-img">
              <FaClock style={{ color: "#fff", fontSize: "4rem" }} />
            </div>
            <div className="appointment-instruction-text">
              Pick a time from the available dates, that suits you
            </div>
          </div>
          <div className="appointment-instruction-row">
            <div className="appointment-instruction-img">
              <MdOutlinePayment style={{ color: "#fff", fontSize: "4rem" }} />
            </div>
            <div className="appointment-instruction-text">
              Choose any of the payment options
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
