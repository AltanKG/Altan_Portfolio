import React from "react";
import "../styles/Project.css";

function Project() {
  return (
    <section id="work" className="section">
      <h2>Work</h2>

      <a
        href="https://github.com/jneuner21/GoldLeader-Project-2"
        target="_blank"
        class="application1"
      >
        <div className="app_desc1">
          <p>Mod-ify</p>
        </div>
      </a>

      <a
        href="https://github.com/AltanKG/Weather_Dashboard"
        target="_blank"
        className="application2"
        rel="noreferrer"
      >
        <div className="app_desc">
          <p>Weather Dashboard</p>
        </div>
      </a>

      <a
        href="https://github.com/AltanKG/Work_Day_Scheduler"
        target="_blank"
        className="application3"
      >
        <div className="app_desc">
          <p>Work Day Scheduler</p>
        </div>
      </a>
    </section>
  );
}

export default Project;
