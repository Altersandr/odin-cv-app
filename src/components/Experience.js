import { format } from "date-fns";
import React, { useState } from "react";

export const Experience = ({ setExperience, experience }) => {
  const [role, setRole] = useState("");
  const [tasks, setTask] = useState("");
  const [company, setCompany] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [id, setId] = useState(44);

  return (
    <section>
      <h1>Experience</h1>
      <br />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        type="text"
        onChange={(e) => setRole(e.target.value)}
      ></input>

      <label htmlFor="tasks">Main tasks:</label>
      <input
        type="text"
        id="tasks"
        name="tasks"
        placeholder="separate on comma"
        onChange={(e) => setTask(e.target.value)}
      ></input>

      <label htmlFor="company">Company:</label>
      <input
        id="company"
        name="company"
        type="text"
        onChange={(e) => setCompany(e.target.value)}
      ></input>

      <label htmlFor="from">From:</label>
      <input
        id="from"
        name="from"
        type="date"
        onChange={(e) => setFrom(format(new Date(e.target.value), "LLL yyyy"))}
      ></input>

      <label htmlFor="to">To:</label>
      <input
        id="to"
        name="to"
        type="date"
        onChange={(e) => setTo(format(new Date(e.target.value), "LLL yyyy"))}
      ></input>

      <button
        onClick={() => {
          setExperience([
            ...experience,
            {
              role: role,
              tasks: tasks,
              company: company,
              from: from,
              to: to,
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
