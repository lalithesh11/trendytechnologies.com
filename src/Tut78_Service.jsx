import React from "react";
import homeImg from "./Images/Tut78_Home.jpg";
import Card from "./Tut78_Card";
import SData from "./Tut78_SourceData_Assume this is coming from Database through API";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row gy-4">
            {SData.map((val, ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Service;
