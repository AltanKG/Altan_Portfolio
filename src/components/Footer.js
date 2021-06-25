import React from "react";
import "../styles/Footer.css";
import linkedInIcon from "../assets/images/LinkedIn-icon.png";
import gitHubIcon from "../assets/images/GitHub-icon.png";

function Footer() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/altan-guc-9096a31b8/"
        target="_blank"
      >
        <img
          id="linkedIn"
          src={linkedInIcon}
          alt="linkedIn-icon"
          className="personalLinks1"
        />
      </a>
      <a href="https://github.com/AltanKG" target="_blank">
        <img
          id="gitHub"
          src={gitHubIcon}
          alt="gitHub-icon"
          className="personalLinks2"
        />
      </a>
    </>
  );
}

export default Footer;
