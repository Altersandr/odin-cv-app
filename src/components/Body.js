import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import { Preview } from "./Preview";
import "./styles/Body.css";

export class Body extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      title: "",
      skills: "",
      email: "",
      number: "",
      website: "",
      bio: "",
      photo: "",
    };
  }

  handleChange = (e, key) => {
    if (key == "photo")
      this.setState({
        [`${key}`]: URL.createObjectURL(e.target.files[0]),
      });
    else
      this.setState({
        [`${key}`]: e.target.value,
      });
    console.log(this.state);
  };

  render(props) {
    return (
      <div id="body-container">
        <div id="body-left">
          <General method={this.handleChange} />
          <Experience />
          <Education />
        </div>
        <div id="body-right">
          <Preview userInput={this.state} />
        </div>
      </div>
    );
  }

  // 1. A section to add general information like name, email, number
}
