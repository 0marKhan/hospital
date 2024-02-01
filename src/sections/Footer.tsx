import React from "react";
import Map from "../components/MapComponent";
import Divider from "@mui/material/Divider";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side">
        <div className="col1">
          <div className="footer-heading">Northwest General Hospital</div>
          <div className="northwest-info">
            Northwest General Hospital and Research Center is the brainchild of
            Alliance Healthcare (Private) Limited aimed at enhancing Northern
            Pakistan’s healthcare infrastructure. Seasoned healthcare
            practitioners have built a comprehensive consortium of almost forty
            specialists and philanthropists from Khyber Pakhtunkhwa and
            Afghanistan.
          </div>
        </div>
        <div className="col2">
          <div className="footer-heading">Important Links</div>
          <div className="footer-link">
            <a href="https://www.nwgh.pk/profile/dr-kamran-amir-khan/">
              Hospital Profile
            </a>
            <Divider style={{ border: "1px solid rgba(130, 130, 130, 0.2)" }} />
          </div>
          <div className="footer-link">
            <a href="https://www.nwgh.pk/">Northwest Hospital</a>
            <Divider style={{ border: "1px solid rgba(130, 130, 130, 0.2)" }} />
          </div>
        </div>
      </div>
      <div className="map-side">
        <Map />
      </div>
    </div>
  );
};

export default Footer;
