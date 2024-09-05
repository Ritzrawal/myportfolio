import React, { Component } from "react";
import AboutPage from "../screen/aboutme-page";
import ParallexCompoennet from "./parallex-component";

const RouteComponent = () => {
    
  const AboutPageRoute = () => {
    return <ParallexCompoennet Content={AboutPage} />;
  };
  return (
    <div>
      route-component
      <div>Hello data</div>
    </div>
  );
};

export default RouteComponent;
