import React from "react";
import "./Explore.css";
const Explore = (props) => {
  return (
    <div className="explore">
      <img src={props.film.image2} alt="" />
      <div className="title2">
        <div className="title2_1">{props.film.movieName}</div>
        <p>{props.film.description}</p>
      </div>
    </div>
  );
};

export default Explore;
