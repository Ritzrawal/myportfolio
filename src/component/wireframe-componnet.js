import React from "react";
import "../@ui/styles/wireframe-styles.css";

const IOSWireframe = ({
  image,
  IphoneHeight,
  IphoneWidth,
  dynamicStyle,
  classname,
}) => {
  console.log("iphone height", IphoneHeight, IphoneWidth);

  return (
    <div style={dynamicStyle} className={classname}>
      <div
        className="iphone-15-pro-max"
        style={{ height: IphoneHeight || 400, width: IphoneWidth || 200 }}
      >
        {/* <div className="top-notch"></div> */}
        <div className="volume-buttons">
          <div className="volume-button"></div>
          <div className="volume-button"></div>
          <div className="volume-button"></div>
        </div>
        <div className="screen">
          {image && <img src={image} alt="Content" />}
        </div>
      </div>
    </div>
  );
};

export default IOSWireframe;
