import React, { useEffect, useState } from "react";
import Svganimation from "./loadinPage";
import "../@ui/styles/Home-styles.css";
import IOSWireframe from "../component/wireframe-componnet";
import ParallexPage from "../component/parallex-component";
import AboutMeScreen from "./aboutme-page";
import ProjectWorkDetails from "../screen/project-work";
import ShareLookLiveStream from "../assets/projects/sharelook-image/traning.png";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const contentParallex = () => {
    return <AboutMeScreen />;
  };

  if (loading) {
    return (
      <div className="MainContainer">
        <div className="LeftHalf" />
        <div className="overlay">
          <Svganimation />
        </div>
        <div className="RightHalf" />
      </div>
    );
  }

  return (
    // <AboutMeScreen />
    // <ProjectWorkDetails />
    <ParallexPage Content={contentParallex()} />
    // <div className="docs-demo-device ios">
    //   <figure>
    //     <svg className="docs-demo-device__ios-notch" viewBox="0 0 219 31">
    //       {" "}
    //       <path
    //         d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
    //         fill-rule="evenodd"
    //       >
    //         {" "}
    //       </path>
    //     </svg>
    //     <div>{/* <img className="Image" src={MobileApp} alt=""></img> */}</div>
    //   </figure>
    // </div>
  );
};

export default Homepage;
