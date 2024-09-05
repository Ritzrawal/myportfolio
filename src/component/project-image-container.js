import React, { useState, useEffect } from "react";
import "./ParallaxSection.css";

const ImageContent = ({ pageSplitTimes, imageComponents }) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
      setScreenHeight(Math.round(window.innerHeight));
    };

    const handleScroll = () => {
      const { body, documentElement } = window.document;
      const scrollTop = Math.max(body.scrollTop, documentElement.scrollTop);
      const scrollPercent =
        (scrollTop /
          (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const minLimit =
        (documentElement.clientHeight * 100) / documentElement.scrollHeight;
      const maxLimit =
        (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
      if (scrollPercent >= minLimit && scrollPercent <= maxLimit) {
        setScrollPercent(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const boxHeight = pageSplitTimes * 100;

  return (
    <div className="image-container">
      {imageComponents.map((ImageComponent, index) => (
        <div
          className="image-box"
          style={{ height: `${boxHeight}vh` }}
          key={index}
        >
          <ImageComponent
            boxHeight={boxHeight}
            index={index + 1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageContent;
