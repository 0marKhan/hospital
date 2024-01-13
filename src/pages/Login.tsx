import React from "react";
import "./Login.scss";

import LoginImage from "../assets/login-image.jpeg";
import TextInput from "../UX/common/TextInput";

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
            <button>LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
