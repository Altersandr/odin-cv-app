import React, { Component } from "react";
import "./styles/general.css";

class General extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">Full name</label>
          <br />
          <input type="text" id="name" name="name"></input>
        </form>
      </section>
    );
  }

  // 1. A section to add general information like name, email, number
}

export default General;
