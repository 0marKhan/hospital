import React from "react";
import "./ActionButtons.scss";
import MakeAppointmentImg from "../assets/make-appointment.jpg";
import ViewAppointmentImg from "../assets/view-appointment.jpg";
import Card from "../UX/common/Card";

const ActionButtons = () => {
  return (
    <div className="action-container">
      <div className="action-body">
        <div className="action-card">
          <Card
            image={MakeAppointmentImg}
            title="Make your Appointment"
            text="Select a time and date, to make an appointment"
            buttonLabel="MAKE APPOINTMENT"
            link="/date-and-time-page"
          />
        </div>
        <div className="action-card">
          <Card
            image={ViewAppointmentImg}
            title="View appointment"
            text="View your appointment if you have made one"
            buttonLabel="VIEW APPOINTMENT"
            link="/view-appointment"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
