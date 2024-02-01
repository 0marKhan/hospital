import React from "react";
import "./About.scss";
import Doctor from "../assets/DrKamranAmir-LS.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="doctor-name">Dr Kamran Amir Khan</h1>
      <h2 className="doctor-subheading">Consultant Internist</h2>
      <div className="flex-body">
        <div className="about-img">
          <img src={Doctor} />
        </div>
        <div className="about-text">
          <div className="department">
            <span className="about-span">Department: </span> General Medicine
          </div>
          <div className="qualifications">
            <span className="about-span">Qualifications: </span>
            <ul>
              <li>MBBS (Pak)</li>
              <li>MD (USA)</li>
              <li>FACP (Fellow American College of Physician) (US)</li>
              <li>Board Certified American Board of Internal Medicine</li>
            </ul>
          </div>
          <div className="email">
            <span className="about-span">Email:</span>kkhan@nwgh.pk
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
