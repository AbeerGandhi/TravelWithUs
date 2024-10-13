import './Goa.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Goa = () => {
  const placeInfo = [
    {
      placeName: "Goa",
      tagline: "Sun, Sand, and Serenity",
      desc: "Goa is known for its pristine beaches, vibrant nightlife, rich culture, and scenic beauty. Plan your trip to explore the best of Goa’s beaches, cuisine, and historical landmarks.",
    },
  ];

  const packageInfo = [
    {
      img: GoaImages.dp1,
      location: "Baga Beach",
      price: "INR 2999",
      desc: "Experience the lively Baga Beach with water sports, beach parties, and great seafood. Ideal for adventure and fun lovers.",
    },
    {
      img: GoaImages.dp2,
      location: "Palolem Beach",
      price: "INR 3999",
      desc: "Relax on the serene Palolem Beach, perfect for those looking to escape the hustle and enjoy a peaceful retreat.",
    },
    {
      img: GoaImages.dp3,
      location: "Old Goa",
      price: "INR 1999",
      desc: "Discover the rich history of Goa with a tour of Old Goa’s churches, including the famous Basilica of Bom Jesus.",
    },
    {
      img: GoaImages.dp4,
      location: "Dudhsagar Falls",
      price: "INR 3499",
      desc: "Witness the majestic Dudhsagar Falls, one of the highest waterfalls in India, surrounded by lush greenery.",
    },
  ];

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
          {packageInfo.map((pkg, index) => (
            <PackCard
              key={index}
              img={pkg.img}
              location={pkg.location}
              price={pkg.price}
              desc={pkg.desc}
            />
          ))}
        </div>
      </div>
      <hr id="line" />
      
    </>
  );
};