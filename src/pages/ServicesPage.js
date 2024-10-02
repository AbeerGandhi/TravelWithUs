import React, { useState } from "react";
import "./servicesPage.css";

export const ServicesPage = () => {
  const [placeType, setPlaceType] = useState("");
  const [season, setSeason] = useState("");
  const [budget, setBudget] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (placeType && season && budget) {
      // Handle search logic here (currently mock result)
      setSearchResult(`Searching for a ${placeType} place to visit during ${season} with a ${budget} budget.`);
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
            <input
              type="text"
              id="placeType"
              value={placeType}
              onChange={(e) => setPlaceType(e.target.value)}
              placeholder="E.g., Beach, Mountain, City"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="season">Preferred Season</label>
            <select
              id="season"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Season
              </option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Autumn">Autumn</option>
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
