import "./styles/Preview.css";
import React, { useState } from "react";

export const Preview = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const { deleteEdu, deleteExp } = props;

  const handleSkills = (skills) => {
    if (skills.length === 0) return;
    let splitSkills = skills.split(",");
    let skillArray = splitSkills.map((skill) => <li key={skill}>{skill}</li>);
    return <ul>{skillArray}</ul>;
  };

  const handleTasks = (experience, index) => {
    if (experience[index].tasks === undefined) return;
    let tasks = experience[index].tasks.split(",");
    let taskArray = tasks.map((task) => <li key={task}>{task}</li>);
    return <ul>{taskArray}</ul>;
  };

  const handleExperience = (props) => {
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
          <div>{handleTasks(userInput.experience, i)}</div>
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

  const handleEducation = (education) => {
    const length = education.length;
    if (length === 0) return;
    else {
      let schools = education.map((school, i) => {
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
          <div>{handleSkills(userInput.skills)}</div>
        </div>
        <div id="education">
          <h1>Education</h1>
          <br />
          <div>{handleEducation(userInput.education)}</div>
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
          <div>{handleExperience(userInput.experience)}</div>
        </div>
      </div>
    </div>
  );
};
