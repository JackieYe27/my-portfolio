import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const ProjectDetailsModal = ({ showModal, show, closeModal, projects }) => {
  const [proj, setProj] = useState(projects);
  const [value, setValue] = useState(0);

  
  const {name, link, description, photoLink, techIcons } = proj[value];
  return (
    <Modal 
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="modal-inside"
    show={showModal}
    onHide={() =>closeModal()}
    >
      <span onClick={() => closeModal()} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <img className="slider-image" src={photoLink} alt="photoModal" />
        </div>

    <div className="col-md-12">
    <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}></div>
    <div className="col-md-10 mx-auto">
      <h3 style={{ padding: "5px 5px 0 5px" }}>
        {name}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-href"
          >
            <i
              className="fas fa-external-link-alt"
              style={{ marginLeft: "10px" }}
            ></i>
          </a>
        ) : null}
      </h3>
      <p className="modal-description" style={{fontSize:"140%"}}>{description}</p>
      <div className="col-md-12 text-center">
        <ul className="list-inline mx-auto">{
          techIcons.map((icon,i) => {
            return (
              <li className="list-inline-item mx-3" key={i}>
                <span>
                <div className="text-center">
                  <i className={icon} style={{ fontSize: "400%" }}>
                  </i>
                  </div>
                </span>
              </li>
            )
          })
        }</ul>
      </div>
    </div>
  </div>
  </div>
  </Modal>
  );
}

export default ProjectDetailsModal