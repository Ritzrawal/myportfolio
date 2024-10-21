import React from "react";
import "../@ui/styles/education-style.css";

const educationData = [
  {
    title: "B.Tech, Computer Science",
    institution: "XYZ University, City",
    score: "CGPA - 9.5",
    dateRange: "Jun 20XX - Jun 20YY",
    universityImage:
      "https://www.shutterstock.com/image-vector/university-vector-icon-isolated-on-260nw-1191570292.jpg",
  },
  {
    title: "High School",
    institution: "ABC School, City",
    score: "Marks - 95%",
    dateRange: "Apr 20XX",
    universityImage:
      "https://www.vhv.rs/dpng/d/614-6141651_transparent-background-education-logo-hd-png-download.png",
  },
  // Add more education items as needed
];

const EducationTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="compnent-title-style">EDUCATION</div>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.score}</p>
              <span className="date">{edu.dateRange}</span>
            </div>
            <div className="timeline-point">
              <img
                src={edu.universityImage}
                alt={edu.institution}
                className="university-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
