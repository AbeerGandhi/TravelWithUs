import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./servicesPage.css";
export const ServicesPage = () => {
  const [placeType, setPlaceType] = useState("");
  const [climaticCondition, setClimaticCondition] = useState("");
  const [location, setLocation] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    e.preventDefault();

    if (placeType && climaticCondition && location) {
      const userPreferences = {
        type_of_place: placeType,
        climatic_condition: climaticCondition,
        location: location
      };
    
      fetch('http://localhost:5000/recommend', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(userPreferences)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Recommendations:', data);
          setSearchResult(data.recommendations || []);  // Ensure recommendations are received
          setError("");
      })
      .catch(error => {
          console.error('Error fetching recommendations:', error);
          setError('Error fetching recommendations. Please try again.');
          setSearchResult(null);
      });
    } else {
      alert("Please fill out all fields to proceed.");
    }
  };

  // Function to handle navigation
  const handleGoToLocation = (locationName) => {
    navigate(`/locations/${locationName}`); // Navigating to the respective location page
  };

  return (
    <section className="services-page">
      <div className="content">
        <h3>Search for Places</h3>
        <p>Enter your preferences to find the best places for you:</p>
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label htmlFor="placeType">Type of Place</label>
            <select
              id="placeType"
              value={placeType}
              onChange={(e) => setPlaceType(e.target.value)}
              required
            >
              <option value="" disabled>Select Type of Place</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="Historical">Historical</option>
              <option value="Place of God">Place of God</option>
              <option value="City Life">City Life</option>
              <option value="Religious">Religious</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="climaticCondition">Climatic Condition</label>
            <select
              id="climaticCondition"
              value={climaticCondition}
              onChange={(e) => setClimaticCondition(e.target.value)}
              required
            >
              <option value="" disabled>Select Climatic Condition</option>
              <option value="Tropical">Tropical</option>
              <option value="Cold">Cold</option>
              <option value="Temperate">Temperate</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Your Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <button type="submit">Search</button>
        </form>

        {error && <p className="error">{error}</p>}

        {searchResult && searchResult.length > 0 && (
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>State</th>
                <th>Type</th>
                <th>Climatic Condition</th>
                <th>Budget</th>
                <th>Cost Range (INR)</th>
                <th>Go To</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.map((place, index) => (
                <tr key={index}>
                  <td>{place.Name}</td>
                  <td>{place.State}</td>
                  <td>{place.Type}</td>
                  <td>{place["Climatic Condition"]}</td>
                  <td>{place.Budget}</td>
                  <td>{place["Cost Range (INR)"]}</td>
                  <td>
                    <button onClick={() => handleGoToLocation(place.Name.toLowerCase())}>
                      Go to {place.Name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};
