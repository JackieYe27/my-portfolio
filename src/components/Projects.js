import React, { useState } from "react";
import {projects} from "../data";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const closeDetailModal = () => {
    setShowModal(false);
  }

  let listProjects = projects.map(project => {
    const {name, startDate, photoLink} = project;
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={name}
        style={{ cursor: "pointer"}}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => setShowModal(true)}>
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
          showModa={showModal}
          show={setShowModal}
          closeModal={closeDetailModal}
        />
      </div>
    </section>
  );
}


export default Projects;