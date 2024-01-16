import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import LoginImage from "../assets/login-image.jpeg";
import TextInput from "../UX/common/TextInput";
import ButtonComponent from "../UX/common/ButtonComponent";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <img src={LoginImage} alt="hospital" />
      </div>
      <div className="right-side">
        <div className="form-body">
          <h1 className="login-heading">User Sign Up</h1>
          <div className="input-box">
            <TextInput label="Username" width="16rem" />
          </div>
          <div className="input-box">
            <TextInput label="Password" width="16rem" />
          </div>
          <div className="login-btn">
            <ButtonComponent width="16rem">SIGN IN</ButtonComponent>
          </div>
          <Link className="login-as-user" to="/">
            Login as an user
          </Link>
          <Link className="login-as-admin" to="/login-admin">
            Login as an admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
