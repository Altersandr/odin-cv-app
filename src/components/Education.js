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
          onChange={(e) =>
            this.setState({
              school: e.target.value,
            })
          }
          required
        ></input>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.studied}
          onChange={(e) =>
            this.setState({
              studied: e.target.value,
            })
          }
          required
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
          required
        ></input>
        <button
          onClick={(e) => {
            changeState(e, "education", this.state);
            this.setState({
              school: "",
              studied: "",
              id: Math.floor(Math.random() * 10000),
            });
          }}
        >
          Add
        </button>
      </section>
    );
  }
}
