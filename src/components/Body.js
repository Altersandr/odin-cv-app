import React, { useState } from "react";
import { General } from "./General";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Preview } from "./Preview";

import "./styles/Body.css";

export const Body = () => {
  const [info, setInfo] = useState({
    name: "",
    title: "",
    skills: "",
    email: "",
    number: "",
    website: "",
    bio: "",
  });

  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [skills, setSkills] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [website, setWebsite] = useState("");
  // const [bio, setBio] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [experience, setExperience] = useState([]);
  // const [education, setEducation] = useState([]);

  // const userInput = {
  //   name: name,
  //   title: title,
  //   skills: skills,
  //   email: email,
  //   number: number,
  //   website: website,
  //   bio: bio,
  //   photo: photo,
  //   experience: experience,
  //   education: education,
  // };

  // this.state = {
  //   name: "",
  //   title: "",
  //   skills: "",
  //   email: "",
  //   number: "",
  //   website: "",
  //   bio: "",
  //   photo: "",
  //   experience: [],
  //   education: [],
  // };

  const handleStateChange = (e, key, state) => {
    if (key === "education") setEducation([...education, state]);
    else if (key === "experience") setExperience([...experience, state]);
    else if (key === "photo") setPhoto(URL.createObjectURL(e.target.files[0]));
    else {
      [`set${state}()`];
    }
    // this.setState({
    //   [`${key}`]: e.target.value,
    // });
  };

  const handleDeleteExperience = (id) => {
    setExperience([...experience.filter((job) => job.id !== id)]);
  };

  const handleDeleteEducation = (id) => {
    setEducation([...education.filter((school) => school.id !== id)]);
  };

  return (
    <div id="body-container">
      <div id="body-left">
        <General handleStateChange={handleStateChange} />
        <Experience handleStateChange={handleStateChange} />
        <Education handleStateChange={handleStateChange} />
      </div>
      <div id="body-right">
        <Preview
          userInput={{
            name: name,
            title: title,
            skills: skills,
            email: email,
            number: number,
            website: website,
            bio: bio,
            photo: photo,
            experience: experience,
            education: education,
          }}
          deleteExp={handleDeleteExperience}
          deleteEdu={handleDeleteEducation}
        />
      </div>
    </div>
  );
};
