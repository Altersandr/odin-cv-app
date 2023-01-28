import React, { Component } from "react";
import "./styles/general.css";

class General extends Component {
  render() {
    return (
      <section>
        <h1>General information</h1>
        <form>
          <label htmlFor="name">Full name:</label>
       
          <input type="text" id="name" name="name"></input>
          <label htmlFor= "email">Email:</label>

          <input type= "email" id = "email" name = "email"></input>

          <label htmlFor = "number">Phone number:</label>
          <input type="tel" id="number" name="number"></input>
        </form>
      </section>
    );
  }

  // 1. A section to add general information like name, email, number
}

export default General;
