import React, { Component } from "react";
import { General } from "./general-info";
import { Experience } from "./experience";
import { Education } from "./education";
import "./styles/Preview.css";
// import "./styles/Body.css";

export class Preview extends Component {
  render(props) {
    return (
      <div id="preview">
        {console.log(this.props)}
        <div id="left">
          <img
            src="https://cc-prod.scene7.com/is/image/CCProdAuthor/portrait-photography_P6b_379x392?$pjpeg$&jpegSize=100&wid=378"
            height="150px"
            width="150px"
            id="photo"
          ></img>
          <div id="contact">
            <h1>Contact</h1>
            <br />
            <div>123-456-7890</div>
            <div>hello@reallygreatsite.com</div>
            <div>123 Anywhere St., Any City</div>
            <div>reallygreatsite.com</div>

            {/* image icons and contact info */}
          </div>
          <div id="skills">
            <h1>Skills</h1>
            <br />
            <ul>
              <li>Web Design Strong Communication</li>
              <li>Design Thinking</li>
              <li>Wireframe Creation</li>
              <li>Front End Coding</li>
              <li>Problem-Solving</li>
              <li>Computer Literacy</li>
              <li>Project Management Tools</li>
            </ul>
          </div>
          <div id="education">
            <h1>Education</h1>
            <br />
            <div>
              <h3>Secondary school</h3>
              <h4>Really Great High School</h4>
              <h4>2010 - 2014</h4>
            </div>
            <br />
            <div>
              <h3>Bachelor of Technology</h3>
              <h4>Really Great University</h4>
              <h4>2010 - 2014</h4>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="name-and-title">
            <h1>{this.props.name}</h1>
            <h3>Senior Web Developer</h3>
          </div>
          <div id="profile">
            <h1>Profile</h1>
            <br />
            <p>
              {" "}
              I am a qualified and professional web developer with five years of
              experience in database administration and website design. Strong
              creative and analytical skills. Team player with an eye for
              detail.{" "}
            </p>
          </div>
          <div id="experience">
            <h1>Experience</h1>
            <br />
            <div>
              <h3>Applications developer</h3>

              <h4>Really Great Company</h4>

              <h4>2016 - Present</h4>
              <br />
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
            <br />
            <div>
              <h3>Web content manager</h3>
              <h4>Really Great Company</h4>
              <h4>2014 - 2016</h4>
              <br />
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
            <br />
            <div>
              <h3>Analysis content</h3>
              <h4>Really Great Company</h4>
              <h4>2010 - 2014</h4>
              <br />
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

//store an example in a json file and fetch it on button press
//add icons for the contact data
//main tasks store as an array, split on comma, display as a list.
