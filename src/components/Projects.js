import React, { useState } from "react";
import {projects} from "../data";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);

  const closeDetailModal = () => {
    setShowModal(false);
  }

  const onClickGetIndex = (index) => {
    setShowModal(true);
    setValue(index);
  }

  let listProjects = projects.map((project,i) => {
    const {name, startDate, photoLink} = project;
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={name}
        style={{ cursor: "pointer"}}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => onClickGetIndex(i)}>
            <div>
              <img
                src={photoLink}
                alt="projectImages"
                height="230"
                style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
              />
              <span className="project-date">{startDate}</span>
              <br />
              <p className="project-title-settings mt-3">
                {name}
              </p>
            </div>
          </div>
        </span>
      </div>
    );
  })

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>PROJECTS</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {listProjects}
          </div>
        </div>
        <ProjectDetailsModal
          showModal={showModal}
          value={value}
          closeModal={closeDetailModal}
          projects={projects}
        />
      </div>
    </section>
  );
}


export default Projects;