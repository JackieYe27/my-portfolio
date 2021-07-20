import React from "react";
import { Modal } from "react-bootstrap";

const ProjectDetailsModal = ({ showModal, show, closeModal }) => {
  return (
    <div>
    {
      showModal && <Modal />
    }
    </div>
  )
}

export default ProjectDetailsModal