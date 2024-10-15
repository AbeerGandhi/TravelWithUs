import './Udaipur.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { UdaipurImages } from "../../../media/udaipur/UdaipurImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Udaipur = () => {
  const placeInfo = [
    {
      placeName: "Udaipur",
      tagline: "The City of Lakes",
      desc: "Udaipur, known for its stunning lakes, palaces, and rich history, is often referred to as the Venice of the East. This romantic city offers a unique blend of tradition and modernity, making it a perfect getaway.",
    },
  ];

  const packageInfo = [
    {
      img: UdaipurImages.dp1,
      location: "City Palace",
      price: "INR 499",
      desc: "Explore the majestic City Palace, a splendid architectural marvel that offers breathtaking views of Lake Pichola and the surrounding landscape.",
    },
    {
      img: UdaipurImages.dp2,
      location: "Lake Pichola",
      price: "INR 299",
      desc: "Take a serene boat ride on Lake Pichola, surrounded by beautiful hills and palaces, a perfect way to enjoy the tranquility of Udaipur.",
    },
    {
      img: UdaipurImages.dp3,
      location: "Jag Mandir",
      price: "INR 399",
      desc: "Visit Jag Mandir, a beautiful island palace on Lake Pichola, known for its stunning architecture and serene surroundings.",
    },
    {
      img: UdaipurImages.dp4,
      location: "Saheliyon-ki-Bari",
      price: "INR 199",
      desc: "Stroll through Saheliyon-ki-Bari, a beautiful garden adorned with fountains, lotus pools, and marble elephants, perfect for a leisurely afternoon.",
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
          <span id="diff">E</span>verything you need to know about Udaipur
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Udaipur Trip!
                  <hr />
                </h2>
                <p>
                  Udaipur is a city that captures the essence of Rajasthan with its rich history, vibrant culture, and stunning landscapes. 
                  From palaces to lakes, explore the romantic side of India in this enchanting city.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={UdaipurImages.d1} alt="City Palace" id="port1" />
            </div>
            <div className="img2">
              <img src={UdaipurImages.d2} alt="Lake Pichola" id="port2" />
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

