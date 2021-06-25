import React from "react";
import "../styles/Form.css";

function Form() {
  return (
    <div className="form">
      <h3 className="headers">Enter your full name</h3>
      <input type="text" placeholder="name here"></input>
      <h3 className="headers">Enter your email</h3>
      <input type="email" placeholder="email here"></input>
      <h3 className="headers">Enter your message here</h3>
      <textarea
        id="message"
        name="message"
        rows="8"
        cols="50"
        placeholder="message here..."
      ></textarea>
      <button id="btn">Submit</button>
    </div>
  );
}

export default Form;
