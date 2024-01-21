import React from "react";

import "./App.css";
import LoginUser from "./pages/LoginUser";
import LoginAdmin from "./pages/LoginAdmin";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
