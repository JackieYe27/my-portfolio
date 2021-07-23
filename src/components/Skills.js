import React from "react";
import {skills} from "../data";

const Skills = () => {
  return (
    <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">SKILLS</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">
              {
                skills.map((skill,i) => {
                  return <li className="list-inline-item mx-3" key={i}>
                    <span>
                      <div className="text-center skills-tile">
                        <i className={skill.icon} style={{ fontSize: "220%" }}>
                          <p
                          className="text-center"
                          style={{ fontSize: "40%", marginTop: "4px" }}
                          >
                            {skill.name}
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Skills