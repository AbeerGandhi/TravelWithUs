import React from "react";
import "./PackCard.css";

export default function PackCard(props) {
  // Determine if the file is a PDF or HTML based on the extension
  const isPDF = props.pdf && props.pdf.endsWith(".pdf");
  const isHTML = props.pdf && props.pdf.endsWith(".html");

  return (
    <div className="card">
      <div className="t-img">
        <img src={props.img} alt="Package" id="placeimg" />
      </div>
      <div className="cont">
        <div className="name">
          <i className="fas fa-map-marker-alt"></i> {props.location}
        </div>
        <div className="abt">{props.desc}</div>
        <div className="price">{props.price}</div>

        {/* Link to open PDF or HTML file directly */}
        {props.pdf && (
          <a
            href={`${process.env.PUBLIC_URL}${props.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="go-btn">
              <button className="gobtn">Generate itinerary</button>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
