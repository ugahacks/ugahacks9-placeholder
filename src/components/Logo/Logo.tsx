import React from "react";
import "./Logo.css";
import uh9Logo from "../../images/ugahackslogo_pinched.svg";
// import uh9Logo from "../../images/Hollow_logo_with_byte_.svg";

import facebookIcon from "../../images/icons/facebook-icon.svg";
import instagramIcon from "../../images/icons/instagram-icon.svg";
import linkedinIcon from "../../images/icons/linkedin-icon.svg";
import githubIcon from "../../images/icons/github-icon.svg";

function Logo() {
  return (
    <div className="flex-container">
      <div className="row">
        <img className="logo" src={uh9Logo} alt="ugahacks 9 logo w/ dog"></img>
      </div>
      <div className="row">
        <h1>COMING SOON</h1>
      </div>
      <div className="row">
        <a
          href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_bDXiOHGczPvHRL8"
          target="_blank"
          rel="noreferrer"
        >
          <button className="register-button">PRE-REGISTER</button>
        </a>
      </div>
      <div className="row">
        <div className="social-container">
          <a
            href="https://www.instagram.com/ugahacks/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon}></img>
          </a>
          <a
            href="https://www.linkedin.com/company/ugahacks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon}></img>
          </a>
          <a
            href="https://github.com/ugahacks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon}></img>
          </a>
          <a
            href="https://www.facebook.com/ugahacks/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
