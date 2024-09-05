import React from "react";
import "../@ui/styles/wireframe-styles.css";

const IOSWireframe = ({ image }) => {
  return (
    <div className="iphone-15-pro-max">
      <div className="top-notch"></div>
      <div className="volume-buttons">
        <div className="volume-button"></div>
        <div className="volume-button"></div>
        <div className="volume-button"></div>
      </div>
      <div className="screen">{image && <img src={image} alt="Content" />}</div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default IOSWireframe;
