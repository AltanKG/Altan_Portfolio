import React from "react";
import "../styles/Header.css";
import selfImage from "../assets/images/picture_self.png";

function Header() {
  return (
    <div id="self-background">
      <img id="self" src={selfImage} alt="Altan Guc" />
    </div>
  );
}

export default Header;
