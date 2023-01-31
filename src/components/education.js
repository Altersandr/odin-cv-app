import React, { Component } from "react";
import "./styles/general-info.css";

//2. A section to add your education experience (school name, title of study, date of study)
export class Education extends Component {
  render() {
    const changeState = this.props.method;
    return (
      <section>
        <h1>Education</h1>
        <br />

        <label htmlFor="school">School name:</label>
        <input type="text" id="school" name="school"></input>

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title"></input>

        <label htmlFor="graduated">Graduated:</label>
        <input type="date" id="graduated" name="graduated"></input>
        <button>Add</button>
      </section>
    );
  }
}
