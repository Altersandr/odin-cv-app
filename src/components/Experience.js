import React, { Component } from "react";
import { format } from "date-fns";

export class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "",
      tasks: "",
      company: "",
      from: "",
      to: "",
      id: 999,
    };
  }

  stateUpdate = ( key, value)=>{
    this.setState({
      [`${key}`]: value,
    })
  }

  stateIdUpdate = ()=>{
    this.setState({
      role: "",
      tasks: "",
      company: "",
      id: Math.floor(Math.random() * 10000)
    })
  }
  

  render() {
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
            this.stateUpdate("role", e.target.value)
          }
        ></input>

        <label htmlFor="tasks">Main tasks:</label>
        <input
          type="text"
          id="tasks"
          name="tasks"
          placeholder="separate on comma"
          onChange={(e) =>
            this.stateUpdate("tasks", e.target.value)
          
          }
        ></input>

        <label htmlFor="company">Company:</label>
        <input
          id="company"
          name="company"
          type="text"
          onChange={(e) =>
            this.stateUpdate("company", e.target.value)
          }
        ></input>

        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="date"
          onChange={(e) =>
            this.stateUpdate("from",  format(new Date(e.target.value), "LLL yyyy"))
        
          }
        ></input>

        <label htmlFor="to">To:</label>
        <input
          id="to"
          name="to"
          type="date"
          onChange={(e) =>
            this.stateUpdate("to",  format(new Date(e.target.value), "LLL yyyy"))
        
          }
        ></input>

        <button


onClick={(e) => {
  this.props.method(e, "experience", this.state);
 this.stateIdUpdate()
}}
  >
Add
        </button>
      </section>
    );
  }
}
