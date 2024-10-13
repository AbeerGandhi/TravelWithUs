import './Andaman.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { AndamanImages } from "../../../media/andaman/AndamanImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Andaman = () => {
  const placeInfo = [
    {
      placeName: "Andaman",
      tagline: "Tropical Paradise with Pristine Beaches",
      desc: "Andaman and Nicobar Islands are renowned for their crystal-clear waters, exotic marine life, and untouched beaches. Perfect for water sports enthusiasts and those seeking serenity.",
    },
  ];

  const packageInfo = [
    {
      img: AndamanImages.dp1,
      location: "Radhanagar Beach",
      price: "INR 4999",
      desc: "Relax at Radhanagar Beach, one of Asia’s most beautiful beaches, offering white sand, turquoise waters, and a peaceful atmosphere.",
    },
    {
      img: AndamanImages.dp2,
      location: "Havelock Island",
      price: "INR 5999",
      desc: "Explore the stunning Havelock Island, famous for its coral reefs, scuba diving opportunities, and serene natural beauty.",
    },
    {
      img: AndamanImages.dp3,
      location: "Cellular Jail",
      price: "INR 1999",
      desc: "Visit the historic Cellular Jail in Port Blair, a colonial prison that now serves as a national memorial to India’s freedom fighters.",
    },
    {
      img: AndamanImages.dp4,
      location: "Ross Island",
      price: "INR 2999",
      desc: "Discover Ross Island, once the administrative headquarters of the British, now a historical site surrounded by lush greenery and ruins.",
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
          <span id="diff">E</span>verything you need to know about Andaman
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Andaman Trip!
                  <hr />
                </h2>
                <p>
                  The Andaman Islands are a tropical paradise with stunning beaches, crystal-clear waters, and rich history. 
                  Whether you're into water sports, exploring historical sites, or just relaxing by the beach, Andaman offers an unforgettable experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={AndamanImages.d1} alt="Radhanagar Beach" id="port1" />
            </div>
            <div className="img2">
              <img src={AndamanImages.d2} alt="Havelock Island" id="port2" />
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
