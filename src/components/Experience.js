import React, { Component } from "react";
import { format } from "date-fns";

export class Experience extends Component {
  constructor() {
    super();

    this.state = {
      role: "",
      tasks: "",
      company: "",
      from: "",
      to: "",
      id: 999,
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
          placeholder="separate on comma"
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
              from: format(new Date(e.target.value), "LLL yyyy"),
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
              to: format(new Date(e.target.value), "LLL yyyy"),
            })
          }
        ></input>

        <button
          onClick={(e) => {
            console.log(this.state);
            changeState(e, "experience", this.state);
            this.setState({
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
