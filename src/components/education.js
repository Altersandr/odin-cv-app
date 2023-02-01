import React, { Component } from "react";
// import "./styles/general-info.css";

import { format } from "date-fns";

export class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: "",
      studied: "",
      graduated: "",
    };
  }
  render() {
    const changeState = this.props.method;
    return (
      <section>
        <h1>Education</h1>
        <br />

        <label htmlFor="school">School name:</label>
        <input
          type="text"
          id="school"
          name="school"
          onChange={(e) =>
            this.setState({
              school: e.target.value,
            })
          }
        ></input>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) =>
            this.setState({
              studied: e.target.value,
            })
          }
        ></input>

        <label htmlFor="graduated">Graduated:</label>
        <input
          type="date"
          id="graduated"
          name="graduated"
          onChange={(e) =>
            this.setState({
              graduated: format(new Date(e.target.value), "do LLL yyyy"),
            })
          }
        ></input>
        <button
          onClick={(e) => {
            changeState(e, "education", this.state);
          }}
        >
          Add
        </button>
      </section>
    );
  }
}
