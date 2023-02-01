import React, { Component } from "react";
// import "./styles/general-info.css";

export class General extends Component {
  render() {
    const changeState = this.props.method;
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
              changeState(e, "name");
            }}
          ></input>

          <label htmlFor="name">Title:</label>

          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => {
              changeState(e, "title");
            }}
          ></input>

          <label htmlFor="skills">Skills:</label>
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="separate on comma"
            onChange={(e) => {
              changeState(e, "skills");
            }}
          ></input>

          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              changeState(e, "email");
            }}
          ></input>

          <label htmlFor="number">Phone number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            onChange={(e) => {
              changeState(e, "number");
            }}
          ></input>

          <label htmlFor="website">GitHub:</label>
          <input
            type="text"
            id="website"
            name="website"
            onChange={(e) => {
              changeState(e, "website");
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
              changeState(e, "bio");
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
                changeState(e, "photo");
              }}
            ></input>
          </label>
        </form>
      </section>
    );
  }
}
