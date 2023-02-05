import React, { useState } from "react";
import { General } from "./General";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Preview } from "./Preview";

import "./styles/Body.css";

export const Body = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [info, updateInfo] = useState({
    name: "",
    title: "",
    skills: "",
    email: "",
    number: "",
    website: "",
    bio: "",
    photo: "",
  });

  const handleStateChange = (update) => {
    updateInfo({ ...info, ...update });
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
        <Experience setExperience={setExperience} experience={experience} />
        <Education setEducation={setEducation} education={education} />
      </div>
      <div id="body-right">
        <Preview
          userInput={info}
          experience={experience}
          education={education}
          deleteExp={handleDeleteExperience}
          deleteEdu={handleDeleteEducation}
        />
      </div>
    </div>
  );
};
