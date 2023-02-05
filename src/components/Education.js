import React, { useState } from "react";

import { format } from "date-fns";

export const Education = ({ setEducation, education }) => {
  const [school, setSchool] = useState("");
  const [studied, setStudied] = useState("");
  const [graduated, setGraduated] = useState("");
  const [id, setId] = useState(88);

  return (
    <section>
      <h1>Education</h1>
      <br />

      <label htmlFor="school">School name:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      ></input>

      <label htmlFor="ed-title">Title:</label>
      <input
        type="text"
        id="ed-title"
        name="title"
        value={studied}
        onChange={(e) => setStudied(e.target.value)}
      ></input>

      <label htmlFor="graduated">Graduated:</label>
      <input
        type="date"
        id="graduated"
        name="graduated"
        onChange={(e) =>
          setGraduated(format(new Date(e.target.value), "LLL yyyy"))
        }
      ></input>
      <button
        onClick={() => {
          setEducation([
            ...education,
            {
              school: school,
              studied: studied,
              graduated: graduated,
              id: id,
            },
          ]);
          setId(Math.floor(Math.random() * 10000));
        }}
      >
        Add
      </button>
    </section>
  );
};
