import React, { useState, useEffect } from "react";
import "../@ui/styles/project-text.styles.css";

const ProjectTextContent = ({
  number,
  projectName,
  projectDesc,
  roles,
  projectType,
  refreshToggle,
}) => {
  const [blockTextReveal, setBlockTextReveal] = useState("quick");

  useEffect(() => {
    if (refreshToggle) {
      setBlockTextReveal("noAnim");
      const timeout = setTimeout(() => {
        setBlockTextReveal("quick");
      }, 500); // matches the animation delay

      return () => clearTimeout(timeout);
    }
  }, [refreshToggle]);

  const renderRoles = () => {
    return roles.map((role, index, arr) => (
      <span key={role}>
        {role}
        {index < arr.length - 1 && " • "}
      </span>
    ));
  };

  return (
    <section className="text-container">
      <div className="project-id">
        <span className={`block-text-reveal ${blockTextReveal}`}>{number}</span>
      </div>
      <div className="project-details-container">
        <div className="project-details">
          <div className="project-name">
            <span className={`block-text-reveal ${blockTextReveal}`}>
              {projectName}
            </span>
          </div>
          <div className="my-role">
            <span className={`block-text-reveal ${blockTextReveal}`}>
              {renderRoles()}
            </span>
          </div>
          <div className="project-desc">
            <span className={`block-text-reveal ${blockTextReveal}`}>
              {projectDesc}
            </span>
          </div>
        </div>
      </div>
      <div className="project-type">
        <span className={`block-text-reveal ${blockTextReveal}`}>
          {projectType}
        </span>
      </div>
    </section>
  );
};

export default ProjectTextContent;
