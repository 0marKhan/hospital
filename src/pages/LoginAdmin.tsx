import React from "react";
import "./Login.scss";

import LoginImage from "../assets/login-image.jpeg";
import TextInput from "../UX/common/TextInput";
import ButtonComponent from "../UX/common/ButtonComponent";
import HealReserve from "../assets/healreserve.png";
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <img src={LoginImage} alt="hospital" />
      </div>
      <div className="right-side">
        <div className="form-body">
          <div className="logo">
            <img src={HealReserve} />
          </div>
          <div className="input-box">
            <TextInput label="Admin Email" width="16rem" />
          </div>
          <div className="input-box">
            <TextInput label="Password" width="16rem" />
          </div>
          <Link to="/admin-home">
            <div className="login-btn">
              <ButtonComponent width="16rem">LOG IN</ButtonComponent>
            </div>
          </Link>
          <a href="https://www.google.com/" className="forgot-password">
            Forgot your password?
          </a>
          <div className="sign-up-link-line">
            Don't have an account?
            <Link className="sign-up" to="/sign-up-admin">
              Sign up
            </Link>
          </div>
          <Link className="login-as-user" to="/">
            Login as a user
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
