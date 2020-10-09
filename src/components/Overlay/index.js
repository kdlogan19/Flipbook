import React from "react";
import "./overlay.css"

const ScreenOverlay = (props)=> {

  return (
    <div className="screen-overlay" 
      onClick={() => {
          props.setProperty(!props.property);
        //   props.setOverlayActive(!props.overlayActive);
      }}>
    </div>
  );
};

export default ScreenOverlay;
