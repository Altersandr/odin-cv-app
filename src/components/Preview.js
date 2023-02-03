import React, { Component } from "react";
import "./styles/Preview.css";

export class Preview extends Component {
  handleSkills = () => {
    if (this.props.userInput.skills.length === 0) return;
    let skills = this.props.userInput.skills.split(",");
    let skillArray = skills.map((skill) => {
      return <li key={skill}>{skill}</li>;
    });
    return <ul>{skillArray}</ul>;
  };

  handleTasks = ({ userInput }, index) => {
    if (userInput.experience[index].tasks === undefined) return;
    let tasks = userInput.experience[index].tasks.split(",");
    let taskArray = tasks.map((task) => <li key={task}>{task}</li>);
    return <ul>{taskArray}</ul>;
  };

  handleExperience = (props) => {
    const { deleteExp } = this.props;
    const length = props.length;
    if (length === 0) return;

    let jobs = props.map((job, i) => {
      return (
        <div key={job + i}>
          <h3>{job.role}</h3>
          <h4>{job.company}</h4>
          <h4>
            From {job.from} To {job.to}
          </h4>
          <div>{this.handleTasks(this.props, i)}</div>
          <br />
          <button
            onClick={() => {
              deleteExp(job.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
    return <div>{jobs}</div>;
  };

  handleEducation = () => {
    const { deleteEdu, userInput } = this.props;
    const length = userInput.education.length;
    if (length === 0) return;
    else {
      let schools = userInput.education.map((school, i) => {
        return (
          <div key={school + i}>
            <h3>{school.school}</h3>
            <h4>{school.studied}</h4>
            <h4>Graduated: {school.graduated}</h4>
            <br />
            <button
              onClick={() => {
                deleteEdu(school.id);
              }}
            >
              Delete
            </button>
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
            height="200px"
            width="200px"
            id="photo"
          ></img>
          <div id="contact">
            <h1>Contact</h1>
            <br />
            <div className="fa fa-phone"> {userInput.number}</div>
            <br />
            <br />
            <div className="fa fa-envelope"> {userInput.email}</div>
            <br />
            <br />
            <div className="fa fa-desktop"> {userInput.website}</div>
          </div>
          <div id="skills">
            <h1>Skills</h1>
            <br />
            <div>{this.handleSkills()}</div>
          </div>
          <div id="education">
            <h1>Education</h1>
            <br />
            <div>{this.handleEducation()}</div>
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
            <div>{this.handleExperience(this.props.userInput.experience)}</div>
          </div>
        </div>
      </div>
    );
  }
}
