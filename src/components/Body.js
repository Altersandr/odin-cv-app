import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import { Preview } from "./Preview";
import "./styles/Body.css";

export class Body extends Component {
  render(props) {
    return (
      <div id="body-container">
        <div id="body-left">
          <General methods={this.props} />
          <Experience />
          <Education />
        </div>
        <div id="body-right">
          <Preview name={this.props.name} />
        </div>
      </div>
    );
  }

  // 1. A section to add general information like name, email, number
}
