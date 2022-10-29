import React from "react";
import Footer from "../Footer/Footer";
import "./OuterCard.scss";

const OuterCard = (props) => {
  return (
    <div className="back">
      <div className="contain p-5 d-flex flex-column justify-content-start align-items-center">
        <div className="wrapper d-flex justify-content-center align-items-center">
          <h4>{props.first}</h4>
          <h4 className="portfolio">{props.second}</h4>
        </div>
        <div className="w-100 ">{props.children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default OuterCard;
