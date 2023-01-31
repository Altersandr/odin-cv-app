import React, { Component } from "react";
import "./styles/general-info.css";

//3. A section to add practical experience
//(company name, position title, main tasks of your jobs, date from and until when you worked for that company)

export class Experience extends Component {
  constructor() {
    super();

    this.state = {
      role: "",
      tasks: "",
      company: "",
      from: "",
      to: "",
    };
  }

  render() {
    const changeState = this.props.method;
    return (
      <section>
        <h1>Experience</h1>
        <br />
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          name="role"
          type="text"
          onChange={(e) =>
            this.setState({
              role: e.target.value,
            })
          }
        ></input>

        <label htmlFor="tasks">Main tasks:</label>
        <input
          type="text"
          id="tasks"
          name="tasks"
          onChange={(e) =>
            this.setState({
              tasks: e.target.value,
            })
          }
        ></input>

        <label htmlFor="company">Company:</label>
        <input
          id="company"
          name="company"
          type="text"
          onChange={(e) =>
            this.setState({
              company: e.target.value,
            })
          }
        ></input>

        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="date"
          onChange={(e) =>
            this.setState({
              from: e.target.value,
            })
          }
        ></input>

        <label htmlFor="to">To:</label>
        <input
          id="to"
          name="to"
          type="date"
          onChange={(e) =>
            this.setState({
              to: e.target.value,
            })
          }
        ></input>

        <button
          onClick={(e) => {
            changeState(e, "experience", this.state);
          }}
        >
          Add
        </button>
      </section>
    );
  }
}
