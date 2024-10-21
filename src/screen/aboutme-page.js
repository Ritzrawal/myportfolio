import React, { useEffect, useRef, useState } from "react";
import "../@ui/styles/aboutme-styles.css"; // Assuming you are using plain CSS

const AboutMeScreen = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
