import React, { useState } from 'react';
import './Mysore.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { MysoreImages } from "../../../media/mysore/MysoreImages";
import PackCard from "../../../components/locations/PackCard";
import axios from 'axios'; // For API requests
import { getDistance } from 'geolib'; // For distance calculation

export const Mysore = () => {
  const [userLocation, setUserLocation] = useState("");
  const [submittedLocation, setSubmittedLocation] = useState(false);
  const [distance, setDistance] = useState(0);
  const [budgetOptions, setBudgetOptions] = useState({});
  const [days, setDays] = useState("");
  const [submittedDays, setSubmittedDays] = useState(false);
  const [randomPackages, setRandomPackages] = useState([]);
  const [error, setError] = useState(null); // To handle errors

  const API_KEY = '273bd28ab95b4b67bb5b4d97b662f30b'; // Replace with your OpenCage API key

  const placeInfo = [
    {
      placeName: "Mysore",
      tagline: "The City of Palaces",
      desc: "Mysore, known for its royal heritage and magnificent palaces, is a cultural hub in Karnataka. The city is famous for its rich history, stunning gardens, and vibrant festivals.",
    },
  ];

  const packageInfo = {
    2: {
      low: { img: MysoreImages.dp1, location: "Low", price: "2,000 - 5,000", pdf: "/pdfs/mysore/2MysoreLow.pdf" },
      medium: { img: MysoreImages.dp2, location: "Medium", price: "5,000 - 15,000", pdf: "/pdfs/mysore/2MysoreMedium.pdf" },
      high: { img: MysoreImages.dp3, location: "High", price: "15,000 - 30,000", pdf: "/pdfs/mysore/2MysoreHigh.pdf" },
    },
    3: {
      low: { img: MysoreImages.dp1, location: "Low", price: "2,000 - 5,000", pdf: "/pdfs/mysore/3MysoreLow.pdf" },
      medium: { img: MysoreImages.dp2, location: "Medium", price: "5,000 - 15,000", pdf: "/pdfs/mysore/3MysoreMedium.pdf" },
      high: { img: MysoreImages.dp3, location: "High", price: "15,000 - 30,000", pdf: "/pdfs/mysore/3MysoreHigh.pdf" },
    },
    4: {
      low: { img: MysoreImages.dp1, location: "Low", price: "2,000 - 5,000", pdf: "/pdfs/mysore/4MysoreLow.pdf" },
      medium: { img: MysoreImages.dp2, location: "Medium", price: "5,000 - 15,000", pdf: "/pdfs/mysore/4MysoreMedium.pdf" },
      high: { img: MysoreImages.dp3, location: "High", price: "15,000 - 30,000", pdf: "/pdfs/mysore/4MysoreHigh.pdf" },
    },
  };
  

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const determineBudget = (distance) => {
    if (distance < 500) {
      return { Budget: "Low (By Road)", CostRange: "(2,000 - 5,000)" };
    } else if (distance < 1500) {
      return { Budget: "Medium (By Train)", CostRange: "(5,000 - 15,000)" };
    } else {
      return { Budget: "High (By Flight)", CostRange: "(15,000 - 30,000)" };
    }
  };

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${userLocation}&key=${API_KEY}`);
      const data = response.data;

      if (data.results.length > 0) {
        const userCoords = data.results[0].geometry;
        const mysoreCoords = { latitude: 12.2958, longitude: 76.6393 }; // Coordinates for Mysore

        const calculatedDistance = getDistance(
          { latitude: userCoords.lat, longitude: userCoords.lng },
          mysoreCoords
        );

        setDistance(calculatedDistance / 1000); // Convert distance to kilometers
        setBudgetOptions(determineBudget(calculatedDistance / 1000));
        setSubmittedLocation(true);
      } else {
        setError("Unable to find the location. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while fetching the location. Please try again.");
    }
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const pickRandomPackages = (packages) => {
    const shuffled = packages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleDaysSubmit = (e) => {
    e.preventDefault();
    setSubmittedDays(true);

    if (days) {
      const selectedPackages = Object.values(packageInfo[days]);
      setRandomPackages(pickRandomPackages(selectedPackages));
    }
  };

  return (
    <>
      <div className="t-container">
        {placeInfo.map((place) => (
          <TravelCard
            key={place.placeName}
            name={place.placeName}
            tagline={place.tagline}
            desc={place.desc}
          />
        ))}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know about Mysore
          <hr />
        </h2>

        <div className="t-row">
          <form onSubmit={handleLocationSubmit} className="form-section">
            <label htmlFor="user-location" className="form-label">Enter your location:</label>
            <input
              type="text"
              id="user-location"
              value={userLocation}
              onChange={handleLocationChange}
              className="form-input"
              required
            />
            <button type="submit" className="submit-btn">Submit Location</button>
          </form>
        </div>

        {error && <div className="error-message">{error}</div>}

        {submittedLocation && (
          <div className="budget-info">
            <h3>Your Distance: {distance} km</h3>
            <h3>Suggested Budget Option: {budgetOptions.Budget}</h3>
            <h3>Cost Range: {budgetOptions.CostRange}</h3>
          </div>
        )}

        <hr id="line" />

        {submittedLocation && (
          <div className="t-row">
            <form onSubmit={handleDaysSubmit} className="form-section">
              <label htmlFor="trip-days" className="form-label">How many days do you want for your trip?</label>
              <select id="trip-days" value={days} onChange={handleDaysChange} className="form-select" required>
                <option value="">Select</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
              </select>
              <button type="submit" className="submit-btn">Submit Days</button>
            </form>
          </div>
        )}

        <hr id="line" />

        {submittedDays && randomPackages.length > 0 && (
          <div className="t-row">
            {randomPackages.map((pkg, index) => (
              <PackCard
                key={index}
                img={pkg.img}
                location={pkg.location}
                price={pkg.price}
                pdf={pkg.pdf} // Pass the specific PDF for each card
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
