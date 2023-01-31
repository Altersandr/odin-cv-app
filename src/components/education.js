import React, { Component } from "react";
import "./styles/general-info.css";

//2. A section to add your education experience (school name, title of study, date of study)
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
              graduated: e.target.value,
            })
          }
        ></input>
        <button
          onClick={(e) => {
            changeState(e, "school", this.state);
          }}
        >
          Add
        </button>
      </section>
    );
  }
}
