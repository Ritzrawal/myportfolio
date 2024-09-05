import React, { useEffect, useRef, useState } from "react";
import "../@ui/styles/aboutme-styles.css"; // Assuming you are using plain CSS

import ProjectImages from "../component/project-image";
const AboutMeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="about-me-container">
      <div
        className={`about-me-content ${isVisible ? "slide-in" : ""}`}
        ref={textRef}
      >
        <h1>About Me</h1>
        <p>
          Hi there, this is Ritesh. I know cool stuff in React.js, Node.js,
          JavaScript, MongoDB, Express.js, C++, Core Java, HTML5, CSS3, and
          Python. I'm passionate about learning new technologies and love to
          indulge in things that I do for my passion.
        </p>
        {/* <ProjectImages /> */}
      </div>
    </div>
  );
};

export default AboutMeScreen;
