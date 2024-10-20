import './Chennai.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { ChennaiImages } from "../../../media/chennai/ChennaiImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Chennai = () => {
  const placeInfo = [
    {
      placeName: "Chennai",
      tagline: "Gateway to South India",
      desc: "Chennai, the capital of Tamil Nadu, is known for its rich history, cultural landmarks, and stunning beaches. The city offers a unique blend of traditional and modern experiences.",
    },
  ];

  const packageInfo = [
    {
      img: ChennaiImages.dp1,
      location: "Marina Beach",
      price: "INR 499",
      desc: "Stroll along Marina Beach, the second-longest urban beach in the world, famous for its scenic beauty and vibrant local atmosphere.",
    },
    {
      img: ChennaiImages.dp2,
      location: "Kapaleeshwarar Temple",
      price: "INR 999",
      desc: "Visit the iconic Kapaleeshwarar Temple, a stunning example of Dravidian architecture, and immerse yourself in Chennai’s rich spiritual heritage.",
    },
    {
      img: ChennaiImages.dp3,
      location: "Fort St. George",
      price: "INR 799",
      desc: "Explore Fort St. George, the first English fortress in India, now a museum showcasing the city’s colonial past.",
    },
    {
      img: ChennaiImages.dp4,
      location: "Government Museum",
      price: "INR 699",
      desc: "Discover India's history, art, and archaeology at the Government Museum, one of the oldest museums in the country with an impressive collection of artifacts.",
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
          <span id="diff">E</span>verything you need to know about Chennai
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Chennai Trip!
                  <hr />
                </h2>
                <p>
                  Chennai, a bustling metropolis with a deep cultural heritage, is a must-visit destination for its historical monuments, temples, and beaches. 
                  The city offers a perfect balance between tradition and modernity.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ChennaiImages.dp1} alt="Marina Beach" id="port1" />
            </div>
            <div className="img2">
              <img src={ChennaiImages.dp2} alt="Kapaleeshwarar Temple" id="port2" />
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
