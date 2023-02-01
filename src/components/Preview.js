import React, { Component } from "react";
import "./styles/Preview.css";

export class Preview extends Component {
  handleSkills = () => {
    if (this.props.userInput.skills.length == 0) return;
    let skills = this.props.userInput.skills.split(",");
    let skillArray = skills.map((skill) => {
      return <li key={skill}>{skill}</li>;
    });
    return <ul>{skillArray}</ul>;
  };

  handleTasks = (props) => {
    let index = props.index;
    let tasks = this.props.userInput.experience[index].tasks.split(",");
    let taskArray = tasks.map((task) => {
      return <li key={task}>{task}</li>;
    });
    return <ul>{taskArray}</ul>;
  };

  handleExperience = () => {
    const length = this.props.userInput.experience.length;
    if (length === 0) return;
    else {
      let jobs = this.props.userInput.experience.map((job, i) => {
        return (
          <div key={job + i}>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <h4>
              From {job.from} To {job.to}
            </h4>
            <this.handleTasks index={i} />
            <br />
          </div>
        );
      });
      return <div>{jobs}</div>;
    }
  };

  handleEducation = () => {
    // console.log(format(new Date("2023-02-01"), "do LLL yyyy"));
    // console.log(this.props.userInput.education);
    const length = this.props.userInput.education.length;
    if (length === 0) return;
    else {
      let schools = this.props.userInput.education.map((school, i) => {
        return (
          <div key={school + i}>
            <h3>{school.school}</h3>
            <h4>{school.studied}</h4>
            <h4>Graduated: {school.graduated}</h4>
            <br />
          </div>
        );
      });
      return <div>{schools}</div>;
    }
  };

  render() {
    const userInput = this.props.userInput;
    return (
      <div id="preview">
        <div id="left">
          <img
            src={userInput.photo}
            alt="User Portrait"
            height="150px"
            width="150px"
            id="photo"
          ></img>
          <div id="contact">
            <h1>Contact</h1>
            <br />
            <div className="fa fa-phone"> {userInput.number}</div>
            <div className="fa fa-envelope"> {userInput.email}</div>
            <div className="fa fa-desktop"> {userInput.website}</div>
          </div>
          <div id="skills">
            <h1>Skills</h1>
            <br />
            <this.handleSkills />
          </div>
          <div id="education">
            <h1>Education</h1>
            <br />
            <div>
              <this.handleEducation />
            </div>
          </div>
        </div>
        <div id="right">
          <div id="name-and-title">
            <h1>{userInput.name}</h1>
            <h3>{userInput.title}</h3>
          </div>
          <div id="profile">
            <h1>Profile</h1>
            <br />
            <p>{userInput.bio}</p>
          </div>
          <div id="experience">
            <h1>Experience</h1>
            <br />
            <div>
              <this.handleExperience />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//store an example in a json file and fetch it on button press
//add icons for the contact data
//main tasks store as an array, split on comma, display as a list.
