import React from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate
import "./PackageCard.css"; // Ensure this file exists

export const PackageCard = ({ placeName, img, info, price }) => {
  const navigate = useNavigate(); // Step 2: Call useNavigate to get the navigate function
  
  // Create a slug for the place name
  const placeSlug = placeName.toLowerCase().replace(/\s+/g, ""); // Converts "Goa" to "goa"

  // Step 3: Create a handler function for button click
  const handleDetailsClick = () => {
    navigate(`/locations/${placeSlug}`); // Navigates to the specific location page
  };

  return (
    <div className="package-card">
      <img src={img} alt={placeName} className="package-img" />
      <h3 className="package-place"><strong>{placeName}</strong></h3> {/* Added bold tag */}
      <p className="package-info">{info}</p>
      <p className="package-price"> {price}</p>
      <button className="details-button" onClick={handleDetailsClick}>View Details</button> {/* Add onClick handler */}
    </div>
  );
};
