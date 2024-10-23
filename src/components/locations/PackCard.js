import React from "react";
import "./PackCard.css";

export default function PackCard(props) {
  return (
    <div className="card">
      <div className="t-img">
        <img src={props.img} alt={""} id="placeimg" />
      </div>
      <div className="cont">
        <div className="name">
          <i className="fas fa-map-marker-alt"></i> {props.location}
        </div>
        <div className="abt">{props.desc}</div>
        <div className="price">{props.price}</div>
        {/* Link to open the PDF directly */}
        <a href={props.pdf} target="_blank" rel="noopener noreferrer">
          <div className="go-btn">
            <button className="gobtn">Book now</button>
          </div>
        </a>
      </div>
    </div>
  );
}
