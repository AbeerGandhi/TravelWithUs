import './Jaisalmer.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { JaisalmerImages } from "../../../media/jaisalmer/JaisalmerImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Jaisalmer = () => {
  const placeInfo = [
    {
      placeName: "Jaisalmer",
      tagline: "The Golden City",
      desc: "Jaisalmer, known for its stunning forts and golden sand dunes, is a mesmerizing desert city in Rajasthan. Its rich history and vibrant culture make it a unique travel destination.",
    },
  ];

  const packageInfo = [
    {
      img: JaisalmerImages.dp1,
      location: "Jaisalmer Fort",
      price: "INR 699",
      desc: "Explore the magnificent Jaisalmer Fort, a UNESCO World Heritage site that offers breathtaking views of the city.",
    },
    {
      img: JaisalmerImages.dp2,
      location: "Sam Sand Dunes",
      price: "INR 1499",
      desc: "Experience the enchanting Sam Sand Dunes, where you can enjoy camel rides and watch stunning sunsets over the Thar Desert.",
    },
    {
      img: JaisalmerImages.dp3,
      location: "Patwon Ki Haveli",
      price: "INR 499",
      desc: "Visit Patwon Ki Haveli, a beautiful collection of five havelis showcasing intricate architecture and rich heritage.",
    },
    {
      img: JaisalmerImages.dp4,
      location: "Gadisar Lake",
      price: "INR 399",
      desc: "Relax at Gadisar Lake, an artificial lake surrounded by temples and ghats, perfect for a peaceful retreat.",
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
          <span id="diff">E</span>verything you need to know about Jaisalmer
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Jaisalmer Trip!
                  <hr />
                </h2>
                <p>
                  Jaisalmer, with its golden sands and rich history, offers an unforgettable experience. 
                  From exploring the majestic fort to enjoying desert safaris, every moment spent here is magical.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={JaisalmerImages.d1} alt="Jaisalmer Fort" id="port1" />
            </div>
            <div className="img2">
              <img src={JaisalmerImages.d2} alt="Sam Sand Dunes" id="port2" />
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
