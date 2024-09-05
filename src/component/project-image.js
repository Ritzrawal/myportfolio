import React from "react";
import IOSWireframe from "./wireframe-componnet";
import "../@ui/styles/project-image-styles.css";
import {
  ShareLookTraning,
  ShareLookLesson,
  ShareLookLiveStream,
} from "../assets";

const ProjectImages = ({
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
  scrollPercent,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight + index - 1;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      <IOSWireframe image={ShareLookTraning} />
      <img
        src={ShareLookTraning}
        className="tesla-image lock"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 2}%) scale(0.6)`,
        }}
        alt="teslaLock"
      />
      <img
        src={ShareLookLesson}
        className="tesla-image battery"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.7)`,
        }}
        alt="teslaBattery"
      />
      <img
        src={ShareLookLiveStream}
        className="tesla-image tyre"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 8}%) scale(0.9)`,
        }}
        alt="teslaTyre"
      />
      <img
        src={ShareLookTraning}
        className="tesla-image heat"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 15}%)`,
        }}
        alt="teslaHeat"
      />
    </>
  );
};

export default ProjectImages;
