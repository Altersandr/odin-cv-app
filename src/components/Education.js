import React, { Component } from "react";

import { format } from "date-fns";

export class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: "",
      studied: "",
      graduated: "",
      id: 888,
    };
  }

  handleInputChange = (key, value) => {
    this.setState({
      [`${key}`]: value,
    });
  };

  handleIdChange = () => {
    this.setState({
      school: "",
      studied: "",
      id: Math.floor(Math.random() * 10000),
    });
  };

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
          value={this.state.school}
          onChange={(e) => this.handleInputChange("school", e.target.value)}
        ></input>

        <label htmlFor="ed-title">Title:</label>
        <input
          type="text"
          id="ed-title"
          name="title"
          value={this.state.studied}
          onChange={(e) => this.handleInputChange("studied", e.target.value)}
        ></input>

        <label htmlFor="graduated">Graduated:</label>
        <input
          type="date"
          id="graduated"
          name="graduated"
          onChange={(e) =>
            this.handleInputChange(
              "graduated",
              format(new Date(e.target.value), "LLL yyyy")
            )
          }
        ></input>
        <button
          onClick={(e) => {
            changeState(e, "education", this.state);
            this.handleIdChange();
          }}
        >
          Add
        </button>
      </section>
    );
  }
}
