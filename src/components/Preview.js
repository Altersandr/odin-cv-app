import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import "./styles/Preview.css";
import "./styles/Body.css";

export class Preview extends Component {
  render() {
    return (
      <>
        <div id="left">
          <div id="photo">Photo</div>
          <div id="contact">
            <h1>Contact</h1>
            <img src="/"></img>
          </div>
          <div id="skills"></div>
          <div id="education"></div>
        </div>
        <div id="right">
          <div id="name-and-title"></div>
          <div id="profile"></div>
          <div id="experience"></div>
        </div>
      </>
    );
  }
}

//add icons for the contact data
//main tasks store as an array, split on comma, display as a list.
