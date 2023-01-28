import React, { Component } from "react";
import "./styles/general-info.css";

//3. A section to add practical experience
//(company name, position title, main tasks of your jobs, date from and until when you worked for that company)

export class Experience extends Component {
  render() {
    return (
      <section>
        <h1>Experience</h1>
        <br />
        <label htmlFor="role">Role:</label>
        <input id="role" name="role" type="text"></input>

        <label htmlFor="tasks">Main tasks:</label>
        <input type="text" id="tasks" name="tasks"></input>

        <label htmlFor="company">Company:</label>
        <input id="company" name="company" type="text"></input>

        <label htmlFor="from">From:</label>
        <input id="from" name="from" type="date"></input>

        <label htmlFor="to">To:</label>
        <input id="to" name="to" type="date"></input>

        <button>Add</button>
      </section>
    );
  }
}
