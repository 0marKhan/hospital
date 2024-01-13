import React from "react";
import "./Login.scss";

import LoginImage from "../assets/login-image.jpeg";
import TextInput from "../UX/common/TextInput";
import ButtonComponent from "../UX/common/ButtonComponent";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <img src={LoginImage} alt="hospital" />
      </div>
      <div className="right-side">
        <div className="form-body">
          <h1 className="login-heading">Log In</h1>
          <div className="input-box">
            <TextInput label="Username" width="16rem" />
          </div>
          <div className="input-box">
            <TextInput label="Password" width="16rem" />
          </div>
          <div className="login-btn">
            <ButtonComponent width="16rem">LOG IN</ButtonComponent>
          </div>
          <a href="https://www.google.com/" className="forgot-password">
            Forgot your password?
          </a>
          <div className="sign-up-link-line">
            Don't have an account?<a className="sign-up">Sign up</a>
          </div>
          <a href="https://www.google.com/" className="login-as-admin">
            Login as an admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
