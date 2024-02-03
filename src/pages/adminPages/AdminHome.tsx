import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Card from "../../UX/common/Card";
import availability from "../../assets/availability.jpg";
import calendar from "../../assets/calendar.jpg";
import "./AdminHome.scss";

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="main-admin-container">
        <div className="admin-container">
          <div className="col">
            <Card
              image={calendar}
              title="View Appointments"
              text="See if anyone has made appointments"
              buttonLabel="VIEW APPOINTMENTS"
              link="/patient-appointments"
            />
          </div>
          <div className="col">
            <Card
              image={availability}
              title="Set Availability"
              text="Set days and times you are available"
              buttonLabel="SET AVAILABILITY"
              link="/availability"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
