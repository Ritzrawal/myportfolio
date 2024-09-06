import "../@ui/styles/parallex.css";
import IOSWireframe from "./wireframe-componnet";
import AboutUS from "./demoparallex";

import React, { useRef, useState, useEffect } from "react";
import IMagesValue from "./project-image";
import ImageContent from "./project-image-container";

import { ContentData } from "../helper/data";

// import Share from "../assets/projects/sharelook-image/lesson.png";

const ParallexPage = ({ Content }) => {
  const contentRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        setIsScrolledToBottom(scrollHeight - scrollTop === clientHeight);
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const components = {
    header: IOSWireframe,
    Projects: IMagesValue,
    Aboutus: AboutUS,
    // paragraph: Paragraph,
  };

  const DynamicComponent = ({ component }) => {
    const Component = components[component.componentType];
    return Component ? <Component {...component.props} /> : null;
  };

  return (
    <div id="workCTN">
      <div id="portbox" className="parallax">
        {ContentData.map((item, index) => {
          return (
            <div
              key={index}
              id={`port0${index}`}
              className={`port block parallax__layer${index}`}
            >
              <div className="scroll-container-data">
                <div className="content" ref={contentRef}>
                  <h1 className={`title ${isScrolledToBottom ? "hidden" : ""}`}>
                    {item.title}
                  </h1>
                  <DynamicComponent key={index} component={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallexPage;
