import React, { Component } from "react";
import { General } from "./General";
import { Experience } from "./Experience";
import { Education } from "./Education";
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

  // handleExperienceInput = (e, key, state) => {
  //   console.log(this.state)
  //   this.setState({
  //     experience: [...this.state.experience, state],
  //   });
  // };

  handleChange = (e, key, state) => {
    if (key === "education") {
      this.setState({
        [`${key}`]: [...this.state.education, state],
      });
    } else if (key ==="experience"){
      this.setState({
        [`${key}`]: [...this.state.experience, state],
      });
    }else if (key === "photo")
      this.setState({
        [`${key}`]: URL.createObjectURL(e.target.files[0]),
      });
    else
      this.setState({
        [`${key}`]: e.target.value,
      });
  };

  handleDeleteExperience = (id) => {
    this.setState({
      experience: [...this.state.experience.filter((job) => job.id !== id)],
    });
  };

  handleDeleteEducation = (id) => {
    this.setState({
      education: [...this.state.education.filter((school) => school.id !== id)],
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
          <Preview
            userInput={this.state}
            deleteExp={this.handleDeleteExperience}
            deleteEdu={this.handleDeleteEducation}
          />
        </div>
      </div>
    );
  }
}
