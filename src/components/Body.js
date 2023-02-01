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
      experience: [],
      education: [],
    };
  }

  handleChange = (e, key, state) => {
    if (key === "education") {
      this.setState({
        education: [...this.state.education, state],
      });
      console.log(this.state.education);
    } else if (key === "experience") {
      this.setState({
        experience: [...this.state.experience, state],
      });
    } else if (key === "photo")
      this.setState({
        [`${key}`]: URL.createObjectURL(e.target.files[0]),
      });
    else
      this.setState({
        [`${key}`]: e.target.value,
      });
  };

  render() {
    return (
      <div id="body-container">
        <div id="body-left">
          <General method={this.handleChange} />
          <Experience method={this.handleChange} />
          <Education method={this.handleChange} />
        </div>
        <div id="body-right">
          <Preview userInput={this.state} />
        </div>
      </div>
    );
  }
}
