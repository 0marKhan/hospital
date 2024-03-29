import React from "react";
import Navbar from "../components/Navbar";

import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

import About from "../sections/About";

import northwest from "../assets/northwest.jpg";
import Logo from "../assets/healreserve.png";
import "./Home.scss";
import Footer from "../sections/Footer";
import ActionButtons from "../sections/ActionButtons";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner" style={{ backgroundImage: `url(${northwest})` }}>
        <div className="overlay">
          <img src={Logo} alt="Logo" className="logo-home" />
          <h1 className="overlay-text">
            A healthier tomorrow starts with booking today
          </h1>
        </div>
      </div>
      <div className="page-body">
        <h1 className="make-appointment-text">Make an appointment today!</h1>
        <div className="body-container">
          <div className="appointment-instruction-body">
            <div className="appointment-instruction-row">
              <div className="appointment-instruction-img">
                <FaCalendarAlt className="appointment-img" />
              </div>
              <div className="appointment-instruction-text">
                Pick an available date from the calendar
              </div>
            </div>
            <div className="appointment-instruction-row">
              <div className="appointment-instruction-img">
                <FaClock className="appointment-img" />
              </div>
              <div className="appointment-instruction-text">
                Pick a time from the available dates that suits you
              </div>
            </div>
            <div className="appointment-instruction-row">
              <div className="appointment-instruction-img">
                <MdOutlinePayment className="appointment-img" />
              </div>
              <div className="appointment-instruction-text">
                Choose any of the payment options
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <ActionButtons />
      <Footer />
    </>
  );
};

export default Home;
