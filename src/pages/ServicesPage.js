import React, { useState } from "react";
import "./servicesPage.css";

export const ServicesPage = () => {
  const [placeType, setPlaceType] = useState("");
  const [climaticCondition, setClimaticCondition] = useState("");
  const [budget, setBudget] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (placeType && climaticCondition && budget) {
      // Handle search logic here (currently mock result)
      setSearchResult(`Searching for a ${placeType} place to visit during ${climaticCondition} conditions with a ${budget} budget.`);
    } else {
      alert("Please fill out all fields to proceed.");
    }
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
              <option value="" disabled>
                Select Type of Place
              </option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="Historical">Historical</option>
              <option value="Place of God">Place of God</option>
              <option value="Religious">Religious</option>
              <option value="Cultural">Cultural</option>
              <option value="Desert">Desert</option>
              <option value="City Life">City Life</option>
              <option value="Hill Station">Hill Station</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="climaticCondition">Climatic Conditions</label>
            <select
              id="climaticCondition"
              value={climaticCondition}
              onChange={(e) => setClimaticCondition(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Climatic Condition
              </option>
              <option value="Tropical">Tropical</option>
              <option value="Cold">Cold</option>
              <option value="Desert">Desert</option>
              <option value="Temperate">Temperate</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Budget
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        {searchResult && (
          <p className="search-result">{searchResult}</p>
        )}
      </div>
    </section>
  );
};
