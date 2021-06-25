import React from "react";
import "../styles/ContactMe.css";

function ContactMe() {
  return (
    <aside id="contact-me" class="section">
      <h2>Contact Me</h2>

      <p>XXX-XXX-XXXX</p>
      <a className="personalLinks" href="mailto: altan.guc@colorado.edu">
        altan.guc@colorado.edu
      </a>
      <a className="personalLinks" href="https://github.com/AltanKG">
        Github
      </a>
      <a
        className="personalLinks"
        href="https://www.linkedin.com/in/altan-guc-9096a31b8/"
      >
        Linkedin
      </a>
    </aside>
  );
}

export default ContactMe;
