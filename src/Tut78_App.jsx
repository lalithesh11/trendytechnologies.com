import React from "react";
import Home from "./Tut78_Home";
import About from "./Tut78_About";
import Contact from "./Tut78_Contact";
import Service from "./Tut78_Service";
import Navbar from "./Tut78_Navbar";
import { Switch, Route,Redirect } from "react-router-dom"; //or below
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Tut78_Footer";

// bootstrap js not working through npm
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
