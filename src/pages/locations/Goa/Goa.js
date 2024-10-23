import React, { useState } from 'react';
import './Goa.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";

export const Goa = () => {
  const [days, setDays] = useState(""); 
  const [submitted, setSubmitted] = useState(false); 
  const [randomPackages, setRandomPackages] = useState([]); 

  const placeInfo = [
    {
      placeName: "Goa",
      tagline: "Sun, Sand, and Serenity",
      desc: "Goa is known for its pristine beaches, vibrant nightlife, rich culture, and scenic beauty. Plan your trip to explore the best of Goa’s beaches, cuisine, and historical landmarks.",
    },
  ];

  // Updated packageInfo with conditions for days and category
  const packageInfo = {
    2: {
      low: { img: GoaImages.dp1, location: "Low", price: "Upto 3,000", pdf: "/pdfs/goa/2daylowgoa.pdf" },
      medium: { img: GoaImages.dp2, location: "Medium", price: "Upto 6,000", pdf: "/pdfs/goa/2daymediumgoa.pdf" },
      high: { img: GoaImages.dp3, location: "High", price: "Upto 10,000", pdf: "/pdfs/goa/2dayhighgoa.pdf" },
    },
    3: {
      low: { img: GoaImages.dp1, location: "Low", price: "Upto 3,000", pdf: "/pdfs/goa/3daylowgoa.pdf" },
      medium: { img: GoaImages.dp2, location: "Medium", price: "Upto 6,000", pdf: "/pdfs/goa/3daymediumgoa.pdf" },
      high: { img: GoaImages.dp3, location: "High", price: "Upto 10,000", pdf: "/pdfs/goa/3dayhighgoa.pdf" },
    },
    4: {
      low: { img: GoaImages.dp1, location: "Low", price: "Upto 3,000", pdf: "/pdfs/goa/4daylowgoa.pdf" },
      medium: { img: GoaImages.dp2, location: "Medium", price: "Upto 6,000", pdf: "/pdfs/goa/4daymediumgoa.pdf" },
      high: { img: GoaImages.dp3, location: "High", price: "Upto 10,000", pdf: "/pdfs/goa/4dayhighlow.pdf" },
    },
  };
  
  

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const pickRandomPackages = (packages) => {
    const shuffled = packages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

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
          <span id="diff">E</span>verything you need to know about Goa
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Goa Trip!
                  <hr />
                </h2>
                <p>
                  Goa offers a perfect blend of adventure and relaxation. Whether you're
                  looking to party on the beaches, explore Portuguese heritage sites, or
                  enjoy the local Goan cuisine, this state has it all.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.d1} alt="Goa Beach" id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.d2} alt="Goa Nightlife" id="port2" />
            </div>
          </div>
        </div>

        <hr id="line" />

        <div className="t-row">
          <form onSubmit={handleSubmit}>
            <label htmlFor="trip-days">How many days do you want for your trip?</label>
            <select id="trip-days" value={days} onChange={handleDaysChange}>
              <option value="">Select</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>

        <hr id="line" />

        {/* Conditionally render random 3 package cards based on form submission */}
        {submitted && randomPackages.length > 0 && (
          <div className="t-row">
            {randomPackages.map((pkg, index) => (
              <PackCard
                key={index}
                img={pkg.img}
                location={pkg.location}
                price={pkg.price}
                desc={pkg.desc} // This is now static; consider adding desc to packageInfo
                pdf={pkg.pdf} // Pass the specific PDF for each card
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
