import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./PatientAppointments.scss";
import AppointmentTable from "../../components/admin/AppointmentTable";

const PatientAppointments = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });
  return (
    <div>
      <AdminNavbar />
      <div className="patient-appointment-container">
        <h2 className="appointment-card-heading">Patient Appointments</h2>

        {/* currently has dummy data */}

        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppointmentTable />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default PatientAppointments;
