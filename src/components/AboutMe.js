import { Icon } from "@iconify/react";
import React from "react";
import reactIcon from '@iconify-icons/logos/react';
import javascriptIcon from '@iconify-icons/logos/javascript';
import html5 from '@iconify-icons/logos/html-5';


const AboutMe = () => {
  return (
    <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>About Me</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src="https://i.ibb.co/ZVFNCzN/4-FCEA0-B8-898-E-421-E-9-F9-A-E72-F651-B9-ACF.jpg"
                    alt="Avatar placeholder"
                  />
                  <Icon 
                    icon={javascriptIcon}
                    style={{fontSize: "400%", margin: "9% 5% 0 5%", backgroundColor: "yellow"}}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%", color:"light blue"}}
                  />
                  <Icon
                    icon={html5}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%", color:"light blue"}}
                  />
                </span>
              </div>
            </div>
          
            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "140%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">Hi :) </span>
                    <br />
                    <br /> 	
                    👋  My name is Jackie! I started off as a self taught software engineer but continued my education with attending and graduating a coding bootcamp called Hack Reactor in 
                    San Francisco. I enjoy working with the latest front end frameworks like React and am currently on a mission to learn more. But do not doubt my 
                    back end knowledge either! I have experience in the combo Node.js and Express as well as a few no SQL + SQL databases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe;