import React from "react";
import "../styles/Resume.css";

function ContactMe() {
  return (
    <>
      <aside id="resume" class="section">
        <h2>Resume</h2>
        <p>Resume will be here later</p>
      </aside>

      <div id="container">
        <h2 id="header2">Software Developer Skills</h2>
        <div className="list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </div>
        <div className="list">
          <li>React.js</li>
          <li>PHP</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Command Line</li>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
