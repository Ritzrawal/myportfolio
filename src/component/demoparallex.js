import React, { useEffect, useState } from "react";
import "./ParallaxSection.css";

import ParallexPage from "./parallex-component";

const AboutUS = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div
        className="parallax"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1 className="parallax-text">About</h1>
        <ParallexPage />
      </div>

      {/* <div className="scrolling-box">Scrolling Animation</div> */}
    </div>
  );
};

export default AboutUS;
