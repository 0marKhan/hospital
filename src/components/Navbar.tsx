// Navbar.jsx
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HealReserve from "../assets/healreserve.png";
import SideNav from "./SideNav";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to="/home">
          <img src={HealReserve} alt="Heal Reserve Logo" />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-items">
          <Link to="/home" className="nav-link">
            View Appointment
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/date-and-time-page" className="nav-link">
            Make Appointment
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/home" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
      <div className="side-nav">
        <SideNav />
      </div>
    </nav>
  );
};

export default Navbar;
