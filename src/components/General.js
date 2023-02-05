import React from "react";

export const General = ({ handleStateChange }) => {
  return (
    <section>
      <h1>General information</h1>
      <br />
      <form>
        <label htmlFor="name">Full name:</label>

        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            handleStateChange({ name: e.target.value });
          }}
        ></input>

        <label htmlFor="name">Title:</label>

        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            handleStateChange({ title: e.target.value });
          }}
        ></input>

        <label htmlFor="skills">Skills:</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="separate on comma"
          onChange={(e) => {
            handleStateChange({ skills: e.target.value });
          }}
        ></input>

        <label htmlFor="email">Email:</label>

        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            handleStateChange({ email: e.target.value });
          }}
          required
        ></input>

        <label htmlFor="number">Phone number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          onChange={(e) => {
            handleStateChange({ number: e.target.value });
          }}
          required
        ></input>

        <label htmlFor="website">GitHub:</label>
        <input
          type="text"
          id="website"
          name="website"
          onChange={(e) => {
            handleStateChange({ website: e.target.value });
          }}
        ></input>

        <label htmlFor="bio">Bio:</label>
        <textarea
          placeholder="Write a short description about yourself"
          id="bio"
          name="bio"
          rows="5"
          cols="33"
          onChange={(e) => {
            handleStateChange({ bio: e.target.value });
          }}
        ></textarea>

        <label htmlFor="photoUpload">
          Photo:
          <input
            type="file"
            id="photoUpload"
            name="photoUpload"
            accept="image/*"
            onChange={(e) => {
              handleStateChange({
                photo: URL.createObjectURL(e.target.files[0]),
              });
            }}
          ></input>
        </label>
      </form>
    </section>
  );
};
