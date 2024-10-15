import './Bengaluru.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { BengaluruImages } from "../../../media/bengaluru/BengaluruImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Bengaluru = () => {
  const placeInfo = [
    {
      placeName: "Bengaluru",
      tagline: "The Silicon Valley of India",
      desc: "Bengaluru, also known as Bangalore, is the tech capital of India. It is famous for its vibrant culture, beautiful parks, and thriving startup ecosystem. Perfect for a mix of modernity and tradition.",
    },
  ];

  const packageInfo = [
    {
      img: BengaluruImages.dp1,
      location: "Lalbagh Botanical Garden",
      price: "INR 499",
      desc: "Explore the lush green Lalbagh Botanical Garden, home to diverse plant species and the iconic glasshouse. Perfect for nature lovers and photography enthusiasts.",
    },
    {
      img: BengaluruImages.dp2,
      location: "Bangalore Palace",
      price: "INR 1999",
      desc: "Visit the majestic Bangalore Palace, built in Tudor-style architecture, and delve into the city’s royal heritage.",
    },
    {
      img: BengaluruImages.dp3,
      location: "Cubbon Park",
      price: "INR 299",
      desc: "Relax in the serene Cubbon Park, a vast green space in the heart of Bengaluru, ideal for morning walks and picnics.",
    },
    {
      img: BengaluruImages.dp4,
      location: "ISKCON Temple",
      price: "INR 999",
      desc: "Experience spiritual bliss at the ISKCON Temple, one of the largest temples dedicated to Lord Krishna in the world.",
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
          <span id="diff">E</span>verything you need to know about Bengaluru
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Bengaluru Trip!
                  <hr />
                </h2>
                <p>
                  Bengaluru is known for its rich history, stunning gardens, modern lifestyle, and vibrant tech scene. 
                  Whether you're exploring its palaces or enjoying its bustling nightlife, Bengaluru has something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={BengaluruImages.d1} alt="Lalbagh Botanical Garden" id="port1" />
            </div>
            <div className="img2">
              <img src={BengaluruImages.d2} alt="Bangalore Palace" id="port2" />
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
