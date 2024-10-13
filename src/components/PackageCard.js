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
