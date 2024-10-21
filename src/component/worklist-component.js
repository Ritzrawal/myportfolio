import React, { useState, useEffect } from "react";
import "../@ui/styles/worlist-component.css";
import { ProjectDetails } from "../helper/data";

const WorkListdetails = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 200, y: -100 });
  const [targetPosition, setTargetPosition] = useState({ x: 200, y: -20 });

  useEffect(() => {
    const moveImageSmoothly = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1,
        y: prev.y + (targetPosition.y - prev.y) * 0.1,
      }));

      requestAnimationFrame(moveImageSmoothly);
    };

    moveImageSmoothly();
  }, [targetPosition]);

  const handleMouseMove = (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Set an offset for positioning the image near the cursor
    let x = e.clientX + 20;
    let y = e.clientY + 20;

    // Adjust x and y to keep the image within the viewport
    const imageWidth = 150; // Same as the hover-image width in CSS
    const imageHeight = 100; // Approximate height for now (adjust if necessary)

    if (x + imageWidth > windowWidth) {
      x = windowWidth - imageWidth - 10; // Keep a little padding from the edge
    }

    if (y + imageHeight > windowHeight) {
      y = windowHeight - imageHeight - 10;
    }

    setTargetPosition({ x, y });
  };
  // Handle mouse enter and leave events for each table cell
  const handleMouseEnter = (image) => {
    setHoveredRow(image);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="hover-table-container">
      <h1 className="compnent-title-style">PROJECTS</h1>
      <table className="hover-table">
        <thead>
          <tr className="header-experience">
            <th>PROJECT NAME</th>
            <th>APP TYPES</th>
            <th>TECH STACK</th>
          </tr>
        </thead>
        <tbody className="body-experience">
          {ProjectDetails.map((item, index) => (
            <>
              <tr
                className="single-list-experience"
                key={index}
                onMouseEnter={() => handleMouseEnter(item.img)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <td>{item.name}</td>
                <td>{item.apptype}</td>

                <td>
                  {item.logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`Logo ${i}`}
                      width="40"
                      height="40"
                      style={{ marginRight: "10px" }}
                    />
                  ))}

                  {hoveredRow !== null && (
                    <div
                      className="popup-image"
                      style={{
                        top: `${mousePosition.y}px`,
                        left: `${mousePosition.x}px`,
                      }}
                    >
                      <img src={hoveredRow} alt="Popup" />
                    </div>
                  )}
                </td>
              </tr>

              {/* {hoveredRow !== null && (
                <div
                  className="popup-image"
                  style={{
                    top: `${mousePosition.y}px`,
                    left: `${mousePosition.x}px`,
                  }}
                >
                  <img src={ProjectDetails[hoveredRow].img} alt="Popup" />
                </div>
              )} */}
            </>
          ))}
        </tbody>
      </table>

      {/* <EducationTimeline /> */}
    </div>
  );
};

export default WorkListdetails;
