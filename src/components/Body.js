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
    // console.log(key);
    console.log(state);
    if (key == "education") {
      // const newExperience = (state) => {
      //   console.log({ state });
      //   return { state };
      // };
      this.setState({
        education: [...this.state.education, state],

        /// have to work here
      });
    }
    if (key == "experience") {
      // const newExperience = (state) => {
      //   console.log({ state });
      //   return { state };
      // };
      this.setState({
        experience: [...this.state.experience, state],

        /// have to work here
      });
      // console.log(this.state.experience);
    } else if (key == "photo")
      this.setState({
        [`${key}`]: URL.createObjectURL(e.target.files[0]),
      });
    else
      this.setState({
        [`${key}`]: e.target.value,
      });
    // console.log(this.state.experience);
  };

  render(props) {
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

  // 1. A section to add general information like name, email, number
}
