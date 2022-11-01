import React from "react";
import ModalStyles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={ModalStyles.Modal} onClick={(e) => e.stopPropagation()}>
      <button className={ModalStyles.Close} onClick={props.deleteData}></button>
      {props.children}
    </div>
  );
}

export default Modal;
