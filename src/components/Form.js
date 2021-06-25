import React from "react";
// import "../styles/Form.css";

function Form() {
  return (
    <div>
      <h3>Enter your full name</h3>
      <input type="text"></input>
      <h3>Enter your email</h3>
      <input type="email"></input>
      <h3>Enter your message here</h3>
      <textarea id="message" name="message" rows="8" cols="50"></textarea>
      <button>Submit</button>
    </div>
  );
}

export default Form;
