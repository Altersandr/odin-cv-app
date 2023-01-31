import React, { Component } from "react";
import "./styles/Preview.css";
// import "./styles/Body.css";

export class Preview extends Component {
  handleSkills = () => {
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
    console.log(this.props.userInput.experience);
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

  render() {
    // console.log(this.props.userInput);
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
            <div>{userInput.number}</div>
            <div>{userInput.email}</div>
            <div>{userInput.website}</div>

            {/* image icons and contact info */}
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
              <h3>Secondary school</h3>
              <h4>Really Great High School</h4>
              <h4>2010 - 2014</h4>
            </div>
            <br />
            <div>
              <h3>Bachelor of Technology</h3>
              <h4>Really Great University</h4>
              <h4>2010 - 2014</h4>
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

              {/* <h4>Really Great Company</h4>

              <h4>2016 - Present</h4>
              <br /> */}
              {/* <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul> */}
            </div>
            <br />
            <div>
              <h3>Web content manager</h3>
              <h4>Really Great Company</h4>
              <h4>2014 - 2016</h4>
              <br />
              <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h3>Analysis content</h3>
              <h4>Really Great Company</h4>
              <h4>2010 - 2014</h4>
              <br />
              <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul>
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
