import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import "./styles/Preview.css";
import "./styles/Body.css";

export class Preview extends Component {
  render() {
    return (
      <div id="preview">
        <div id="left">
          <div id="photo">Photo</div>
          <div id="contact">
            <h1>Contact</h1>
            {/* image icons and contact info */}
          </div>
          <div id="skills">
            {/* <ul>

            </ul> */}
          </div>
          <div id="education">
            <h1>Education</h1>
            <div>
              <h3>Secondary school</h3>
              <h4>Really Great High School</h4>
              <h4>2010 - 2014</h4>
            </div>

            <div>
              <h3>Bachelor of Technology</h3>
              <h4>Really Great University</h4>
              <h4>2010 - 2014</h4>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="name-and-title">
            <h1>Oleksandr Tsurkan</h1>
            <h3>Junior Web Developer</h3>
          </div>
          <div id="profile">
            <h1>Profile</h1>
            <p>
              {" "}
              I am a qualified and professional web developer with five years of
              experience in database administration and website design. Strong
              creative and analytical skills. Team player with an eye for
              detail.{" "}
            </p>
          </div>
          <div id="experience">
            <div>
              <h3>Applications developer</h3>
              <h4>Really Great Company</h4>
              <h4>2016 - Present</h4>
              <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul>
            </div>

            <div>
              <h3>Web content manager</h3>
              <h4>Really Great Company</h4>
              <h4>2014 - 2016</h4>
              <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul>
            </div>
            <div>
              <h3>Analysis content</h3>
              <h4>Really Great Company</h4>
              <h4>2010 - 2014</h4>
              <ul>
                <li>Database administration and website design</li>
                <li>
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li>
                  Educational institutions and online classroom management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add icons for the contact data
//main tasks store as an array, split on comma, display as a list.
