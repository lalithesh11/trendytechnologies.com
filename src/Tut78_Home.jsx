import React from "react";
import homeImg from "./Images/Tut78_Home2.svg";
import { NavLink } from "react-router-dom";
import Common from "./Tut78_Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={homeImg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
