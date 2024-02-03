// Navbar.jsx
import React from "react";
import "../Navbar.scss";
import { Link } from "react-router-dom";
import HealReserve from "../../assets/healreserve.png";
import SideNav from "../SideNav";
import AdminSideNav from "./AdminSideNav";

const AdminNavbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to="/admin-home">
          <img src={HealReserve} alt="Heal Reserve Logo" />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-items">
          <Link to="/patient-appointments" className="nav-link">
            View Appointments
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/availability" className="nav-link">
            Set Availability
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/admin-home" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
      <div className="side-nav">
        <AdminSideNav />
      </div>
    </nav>
  );
};

export default AdminNavbar;
