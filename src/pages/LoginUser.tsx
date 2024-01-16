import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import LoginImage from "../assets/login-image.jpeg";
import TextInput from "../UX/common/TextInput";
import ButtonComponent from "../UX/common/ButtonComponent";

const LoginUser = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <img src={LoginImage} alt="hospital" />
      </div>
      <div className="right-side">
        <div className="form-body">
          <h1 className="login-heading">User Log In</h1>
          <div className="input-box">
            <TextInput label="Username" width="16rem" />
          </div>
          <div className="input-box">
            <TextInput label="Password" width="16rem" />
          </div>
          <div className="login-btn">
            <Link to="/home">
              <ButtonComponent width="16rem">LOG IN</ButtonComponent>
            </Link>
          </div>
          <a href="https://www.google.com/" className="forgot-password">
            Forgot your password?
          </a>
          <div className="sign-up-link-line">
            Don't have an account?
            <Link className="sign-up" to="sign-up">
              Sign up
            </Link>
          </div>
          <Link className="login-as-admin" to="/login-admin">
            Login as an admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
