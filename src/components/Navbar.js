import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <h1 id="name">Altan Guc</h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" exact>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/Project" exact>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/ContactMe" exact>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="/Resume" exact>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
