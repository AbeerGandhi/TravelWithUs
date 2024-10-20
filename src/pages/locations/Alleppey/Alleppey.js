import './Alleppey.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { AlleppeyImages } from "../../../media/alleppey/AlleppeyImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Alleppey = () => {
  const placeInfo = [
    {
      placeName: "Alleppey",
      tagline: "Venice of the East",
      desc: "Alleppey, also known as Alappuzha, is famous for its serene backwaters, houseboats, and picturesque landscapes. It's the perfect destination for a relaxing vacation amidst Kerala's natural beauty.",
    },
  ];

  const packageInfo = [
    {
      img: AlleppeyImages.dp1,
      location: "Backwater Houseboat",
      price: "INR 5999",
      desc: "Experience a luxurious stay on a traditional Kerala houseboat, drifting through the calm backwaters of Alleppey. Ideal for a tranquil and unique getaway.",
    },
    {
      img: AlleppeyImages.dp2,
      location: "Alleppey Beach",
      price: "INR 1999",
      desc: "Relax at Alleppey Beach, known for its beautiful shoreline and scenic sunset views. A great place for unwinding and enjoying nature's tranquility.",
    },
    {
      img: AlleppeyImages.dp3,
      location: "Vembanad Lake",
      price: "INR 3499",
      desc: "Enjoy a boat ride on Vembanad Lake, the longest lake in India, surrounded by lush greenery and a serene atmosphere.",
    },
    {
      img: AlleppeyImages.dp4,
      location: "Pathiramanal Island",
      price: "INR 2499",
      desc: "Explore Pathiramanal Island, a haven for birdwatchers and nature lovers, situated in the backwaters of Alleppey.",
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
          <span id="diff">E</span>verything you need to know about Alleppey
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Alleppey Trip!
                  <hr />
                </h2>
                <p>
                  Alleppey is renowned for its beautiful backwaters, houseboat cruises, and serene landscapes. 
                  It's the perfect destination for those seeking a peaceful retreat surrounded by Kerala’s natural wonders.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={AlleppeyImages.dp1} alt="Backwater Houseboat" id="port1" />
            </div>
            <div className="img2">
              <img src={AlleppeyImages.dp2} alt="Alleppey Beach" id="port2" />
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
