import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </Router>
);
