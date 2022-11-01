import React from "react";
import PortalReactDOM from "react-dom";

import OverlayStyles from "./ModalOverlay.module.css";

function ModalOverlay(props) {
  React.useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Escape") {
        props.deleteData();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [props]);

  const modalRoot = document.getElementById("react-modals");
  return PortalReactDOM.createPortal(
    <div
      onClick={props.deleteData}
      onKeyPress={(e) => {
        props.detectKeyDown(e);
      }}
      className={
        props.visible ? OverlayStyles.OverlayOpen : OverlayStyles.Overlay
      }
    >
      {props.children}
    </div>,
    modalRoot
  );
}

export default ModalOverlay;
