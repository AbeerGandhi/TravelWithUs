import './Lakshadweep.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { LakshadweepImages } from "../../../media/lakshadweep/LakshadweepImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Lakshadweep = () => {
  const placeInfo = [
    {
      placeName: "Lakshadweep",
      tagline: "Paradise on Earth",
      desc: "Lakshadweep is an exquisite group of islands known for their stunning beaches, crystal-clear waters, and vibrant coral reefs. It’s the perfect destination for those seeking tranquility and adventure.",
    },
  ];

  const packageInfo = [
    {
      img: LakshadweepImages.dp1,
      location: "Agatti Island",
      price: "INR 4999",
      desc: "Experience the beauty of Agatti Island, known for its stunning beaches and water sports activities.",
    },
    {
      img: LakshadweepImages.dp2,
      location: "Bangaram Island",
      price: "INR 5999",
      desc: "Enjoy the serene beauty of Bangaram Island, ideal for snorkeling, diving, and relaxation.",
    },
    {
      img: LakshadweepImages.dp3,
      location: "Kadmat Island",
      price: "INR 3999",
      desc: "Discover the natural beauty of Kadmat Island, famous for its white sandy beaches and vibrant marine life.",
    },
    {
      img: LakshadweepImages.dp4,
      location: "Kavaratti Island",
      price: "INR 3499",
      desc: "Visit Kavaratti Island, known for its beautiful lagoons and water sports, perfect for adventure lovers.",
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
          <span id="diff">E</span>verything you need to know about Lakshadweep
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Lakshadweep Trip!
                  <hr />
                </h2>
                <p>
                  Lakshadweep is a stunning tropical paradise that offers a unique blend of relaxation and adventure. 
                  With its pristine beaches, crystal-clear waters, and vibrant marine life, it is a must-visit destination for beach lovers.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={LakshadweepImages.d1} alt="Agatti Island" id="port1" />
            </div>
            <div className="img2">
              <img src={LakshadweepImages.d2} alt="Bangaram Island" id="port2" />
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
