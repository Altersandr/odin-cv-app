import React, { Component } from "react";
import "./styles/general-info.css";

export class General extends Component {
  render(props) {
    const method = this.props.methods.methods;
    return (
      <section>
        {console.log(this.props.methods.methods)}
        {console.log(this.props)}
        <h1>General information</h1>
        <br />
        <form>
          <label htmlFor="name">Full name:</label>

          <input type="text" id="name" name="name" onChange={method}></input>
          <label htmlFor="email">Email:</label>

          <input type="email" id="email" name="email"></input>

          <label htmlFor="number">Phone number:</label>
          <input type="tel" id="number" name="number"></input>

          {/* <label htmlFor="skills">Skills:</label>
          <input type="tel" id="number" name="number"></input> */}

          <label htmlFor="website">GitHub:</label>
          <input type="text" id="website" name="website"></input>

          <label htmlFor="bio">Bio:</label>
          <textarea
            placeholder="Write a short description about yourself"
            id="bio"
            name="bio"
            rows="5"
            cols="33"
          ></textarea>

          <label htmlFor="photoUpload">
            Photo:
            <input
              type="file"
              id="photoUpload"
              name="photoUpload"
              accept="image/*"
            ></input>
          </label>
        </form>
      </section>
    );
  }

  // 1. A section to add general information like name, email, number
}
