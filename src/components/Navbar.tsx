import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
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
    </nav>
  );
};

export default Navbar;
