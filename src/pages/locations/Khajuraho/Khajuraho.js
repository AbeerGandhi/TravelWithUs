import './Khajuraho.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { KhajurahoImages } from "../../../media/khajuraho/KhajurahoImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Khajuraho = () => {
  const placeInfo = [
    {
      placeName: "Khajuraho",
      tagline: "The Land of Temples",
      desc: "Khajuraho is famous for its stunning temples adorned with intricate erotic sculptures and exquisite architecture. A UNESCO World Heritage site, it reflects the rich cultural heritage of India.",
    },
  ];

  const packageInfo = [
    {
      img: KhajurahoImages.dp1,
      location: "Western Group of Temples",
      price: "INR 499",
      desc: "Explore the Western Group of Temples, known for their magnificent architecture and intricate carvings.",
    },
    {
      img: KhajurahoImages.dp2,
      location: "Kandariya Mahadev Temple",
      price: "INR 399",
      desc: "Visit the Kandariya Mahadev Temple, the largest temple in Khajuraho, dedicated to Lord Shiva, showcasing stunning sculptures.",
    },
    {
      img: KhajurahoImages.dp3,
      location: "Eastern Group of Temples",
      price: "INR 299",
      desc: "Discover the Eastern Group of Temples, featuring unique sculptures and architectural styles.",
    },
    {
      img: KhajurahoImages.dp4,
      location: "Light and Sound Show",
      price: "INR 199",
      desc: "Enjoy the captivating Light and Sound Show that narrates the history of Khajuraho temples.",
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
          <span id="diff">E</span>verything you need to know about Khajuraho
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Khajuraho Trip!
                  <hr />
                </h2>
                <p>
                  Khajuraho, with its stunning temples and rich history, is a must-visit for anyone interested in Indian art and culture. 
                  From ancient sculptures to modern amenities, Khajuraho offers a unique travel experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={KhajurahoImages.d1} alt="Western Group of Temples" id="port1" />
            </div>
            <div className="img2">
              <img src={KhajurahoImages.d2} alt="Kandariya Mahadev Temple" id="port2" />
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
