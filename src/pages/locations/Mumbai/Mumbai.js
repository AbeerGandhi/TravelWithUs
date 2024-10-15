import './Mumbai.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { MumbaiImages } from "../../../media/mumbai/MumbaiImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Mumbai = () => {
  const placeInfo = [
    {
      placeName: "Mumbai",
      tagline: "The City of Dreams",
      desc: "Mumbai, the financial capital of India, is a vibrant metropolis known for its diverse culture, iconic landmarks, and bustling nightlife. It offers a unique blend of tradition and modernity.",
    },
  ];

  const packageInfo = [
    {
      img: MumbaiImages.dp1,
      location: "Gateway of India",
      price: "INR 499",
      desc: "Visit the iconic Gateway of India, a historical monument overlooking the Arabian Sea.",
    },
    {
      img: MumbaiImages.dp2,
      location: "Marine Drive",
      price: "INR 299",
      desc: "Enjoy a scenic stroll along Marine Drive, known for its beautiful coastline and stunning sunsets.",
    },
    {
      img: MumbaiImages.dp3,
      location: "Elephanta Caves",
      price: "INR 1999",
      desc: "Explore the ancient Elephanta Caves, a UNESCO World Heritage Site with stunning rock-cut sculptures.",
    },
    {
      img: MumbaiImages.dp4,
      location: "Chhatrapati Shivaji Terminus",
      price: "INR 499",
      desc: "Discover the architectural beauty of Chhatrapati Shivaji Terminus, a UNESCO World Heritage Site and a major railway station.",
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
          <span id="diff">E</span>verything you need to know about Mumbai
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Mumbai Trip!
                  <hr />
                </h2>
                <p>
                  Mumbai is a dynamic city that offers something for everyone, from cultural experiences to culinary delights. 
                  Immerse yourself in the vibrant atmosphere and explore the many attractions this city has to offer.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={MumbaiImages.d1} alt="Gateway of India" id="port1" />
            </div>
            <div className="img2">
              <img src={MumbaiImages.d2} alt="Marine Drive" id="port2" />
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
