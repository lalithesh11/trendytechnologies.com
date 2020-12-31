import React from "react";
import homeImg from "./Images/Tut78_Home.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {/* gy:gutter y-axis is for gap up & down */}
     
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/contact" class="btn btn-primary">
                Contact US
              </NavLink>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
