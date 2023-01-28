import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import { Preview } from "./Preview";
import "./styles/Body.css";

export class Body extends Component {
  render() {
    return (
      <div id="body-container">
        <div id="body-left">
          <General />
          <Experience />
          <Education />
        </div>
        <div id="body-right">
          <Preview />
        </div>
      </div>
    );
  }

  // 1. A section to add general information like name, email, number
}
