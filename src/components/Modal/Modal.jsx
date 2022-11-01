import React from "react";
import PropTypes from "prop-types";

import ModalStyles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={ModalStyles.Modal} onClick={(e) => e.stopPropagation()}>
      <button className={ModalStyles.Close} onClick={props.deleteData}></button>
      {props.children}
    </div>
  );
}

Modal.propTypes = {
  deleteData: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
