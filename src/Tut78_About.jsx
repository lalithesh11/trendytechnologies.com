import React from "react";
import aboutImg from "./Images/Tut78_About2.png";
import { NavLink } from "react-router-dom";
import Common from "./Tut78_Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={aboutImg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
