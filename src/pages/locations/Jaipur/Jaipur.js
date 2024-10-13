import './Jaipur.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { JaipurImages } from "../../../media/jaipur/JaipurImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Jaipur = () => {
  const placeInfo = [
    {
      placeName: "Jaipur",
      tagline: "The Pink City",
      desc: "Jaipur, the capital of Rajasthan, is known for its stunning palaces, vibrant bazaars, and rich history. A perfect blend of tradition and modernity, it offers a unique experience for travelers.",
    },
  ];

  const packageInfo = [
    {
      img: JaipurImages.dp1,
      location: "Hawa Mahal",
      price: "INR 499",
      desc: "Explore the iconic Hawa Mahal, also known as the Palace of Winds, famous for its unique architectural style.",
    },
    {
      img: JaipurImages.dp2,
      location: "Amber Fort",
      price: "INR 799",
      desc: "Visit the majestic Amber Fort, a UNESCO World Heritage site, known for its beautiful architecture and stunning views.",
    },
    {
      img: JaipurImages.dp3,
      location: "City Palace",
      price: "INR 599",
      desc: "Discover the royal heritage of Jaipur at the City Palace, featuring impressive courtyards, gardens, and museums.",
    },
    {
      img: JaipurImages.dp4,
      location: "Jantar Mantar",
      price: "INR 399",
      desc: "Learn about astronomy at Jantar Mantar, an astronomical observatory built in the 18th century with remarkable instruments.",
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
          <span id="diff">E</span>verything you need to know about Jaipur
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Jaipur Trip!
                  <hr />
                </h2>
                <p>
                  Jaipur, known as the Pink City, offers a captivating blend of history and culture. 
                  From the majestic forts to the bustling bazaars, there's something for everyone to explore in this royal city.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={JaipurImages.d1} alt="Hawa Mahal" id="port1" />
            </div>
            <div className="img2">
              <img src={JaipurImages.d2} alt="Amber Fort" id="port2" />
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
