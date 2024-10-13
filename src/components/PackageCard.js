<<<<<<< HEAD
import React from "react";
import "./PackageCard.css"; // Ensure this file exists

export const PackageCard = ({ placeName, img, info, price }) => {
  return (
    <div className="package-card">
      <img src={img} alt={placeName} className="package-img" />
      <h3 className="package-place"><strong>{placeName}</strong></h3> {/* Added bold tag */}
      <p className="package-info">{info}</p>
      <p className="package-price">Price: {price}</p>
      <button className="details-button">View Details</button>
    </div>
  );
};
=======
import './PackageCard.css'
import {Link} from "react-router-dom"

export const PackageCard =(props)=>{
    return (
        <>
        <div className="card module">
            <div className="img">
              <img src={props.img} id="placeimg" alt={props.placeName}/>
            </div>
            <div className="cont">
              <div className="name">
                <i className="fas fa-map-marker-alt"></i> {props.placeName}
              </div>
              <div className="abt">
                {props.info}
              </div>
              <div className="price">{props.price}</div>
              <div className="go-btn">
                
              </div>
            </div>
          </div>
        </>
    )
}
>>>>>>> defb7a09e09e770f55211b28e9858ffae47b6c88
