import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div
      className="card"
      onClick={() => {
        props.onClick();
      }}
    >
      <img src={props.img} alt="img" />
      <p className="film_ep">Episode {props.episode}</p>
      <p className="film_name">{props.name}</p>
    </div>
  );
};

export default Card;
