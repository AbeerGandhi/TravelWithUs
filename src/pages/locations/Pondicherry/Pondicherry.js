import './Pondicherry.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { PondicherryImages } from "../../../media/pondicherry/PondicherryImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Pondicherry = () => {
  const placeInfo = [
    {
      placeName: "Pondicherry",
      tagline: "The French Riviera of India",
      desc: "Pondicherry, known for its French colonial architecture and vibrant culture, offers a unique blend of Indian and French influences. The serene beaches and quaint streets make it a perfect getaway.",
    },
  ];

  const packageInfo = [
    {
      img: PondicherryImages.dp1,
      location: "Auroville",
      price: "INR 499",
      desc: "Explore Auroville, an experimental township dedicated to human unity, featuring the iconic Matrimandir and beautiful gardens.",
    },
    {
      img: PondicherryImages.dp2,
      location: "Promenade Beach",
      price: "INR 299",
      desc: "Relax at Promenade Beach, known for its stunning sunrises, evening strolls, and vibrant cafes along the shore.",
    },
    {
      img: PondicherryImages.dp3,
      location: "Sri Aurobindo Ashram",
      price: "INR 199",
      desc: "Visit Sri Aurobindo Ashram, a spiritual community that promotes peace and meditation, surrounded by beautiful gardens.",
    },
    {
      img: PondicherryImages.dp4,
      location: "French Quarter",
      price: "INR 249",
      desc: "Wander through the charming streets of the French Quarter, lined with colorful colonial buildings, boutiques, and cafes.",
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
          <span id="diff">E</span>verything you need to know about Pondicherry
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Pondicherry Trip!
                  <hr />
                </h2>
                <p>
                  Pondicherry is a delightful fusion of Indian and French culture, offering stunning architecture, beautiful beaches, and a peaceful ambiance. 
                  It's an ideal destination for those looking to unwind and explore a unique cultural heritage.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={PondicherryImages.dp1} alt="Auroville" id="port1" />
            </div>
            <div className="img2">
              <img src={PondicherryImages.dp2} alt="Promenade Beach" id="port2" />
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

