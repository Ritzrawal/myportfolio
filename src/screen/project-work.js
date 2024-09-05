import React, { useState, useEffect } from "react";

import TextContent from "../component/project-text";
import ImageContent from "../component/project-image-container";

const ProjectWorkDetails = () => {
  const [vh, setVh] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const pageSplitTimes = 1.3;
  let lastScrollTop = 0;
  let scrollDirectionDown = true;

  const workDetails = [
    {
      number: "",
      projectName: "",
      projectDesc: "",
      projectType: "",
      roles: [""],
    },
    {
      number: "01",
      projectName: "FR Design system",
      projectDesc:
        "Multi brand e-commerce design system for websites and native mobile applications.",
      projectType: "DESIGN SYSTEM",
      roles: ["Design system lead", "Technical PDM"],
    },
    {
      number: "02",
      projectName: "LASHIC",
      projectDesc:
        "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
      projectType: "APP SUITE",
      roles: ["Design lead"],
    },
    {
      number: "03",
      projectName: "Eyep",
      projectDesc:
        "Single purpose website to show your IP address and location.",
      projectType: "WEB APP",
      roles: ["UI Designer", "Front-end Developer"],
    },
    {
      number: "04",
      projectName: "Tesla app",
      projectDesc: "iOS app concept to control Tesla cars remotely.",
      projectType: "iOS APP CONCEPT",
      roles: ["UI Designer"],
    },
    {
      number: "05",
      projectName: "WhatsMyFood",
      projectDesc:
        "iOS app to remember your fav food at each restaurant you eat.",
      projectType: "iOS APP",
      roles: ["UI Designer", "Front-end Developer"],
    },
    {
      number: "06",
      projectName: "Voistrap",
      projectDesc:
        "Web app project to give workplace insights using indoor localization, voice and schedule.",
      projectType: "iOS APP",
      roles: ["UI Designer", "Full Stack Developer"],
    },
    {
      number: "",
      projectName: "",
      projectDesc: "",
      projectType: "",
      roles: [""],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setVh(Math.round(window.innerHeight * pageSplitTimes));
    };

    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      scrollDirectionDown = scrollDistance > lastScrollTop;
      lastScrollTop = scrollDistance;

      if (
        Math.floor(scrollDistance / vh) !== slideNumber &&
        slideNumber < workDetails.length - 1
      ) {
        setSlideNumber(Math.floor(scrollDistance / vh));
      } else if (
        slideNumber === workDetails.length - 1 &&
        Math.floor(scrollDistance / vh) < slideNumber
      ) {
        setSlideNumber(Math.floor(scrollDistance / vh));
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [vh, slideNumber, workDetails.length]);

  const refresh = true;

  return (
    <div className="container">
      <TextContent
        number={workDetails[slideNumber].number}
        projectName={workDetails[slideNumber].projectName}
        projectDesc={workDetails[slideNumber].projectDesc}
        projectType={workDetails[slideNumber].projectType}
        roles={workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
      <ImageContent pageSplitTimes={pageSplitTimes} />
    </div>
  );
};

export default ProjectWorkDetails;
