import './Mysore.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { MysoreImages } from "../../../media/mysore/MysoreImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Mysore = () => {
  const placeInfo = [
    {
      placeName: "Mysore",
      tagline: "The City of Palaces",
      desc: "Mysore, known for its royal heritage and magnificent palaces, is a cultural hub in Karnataka. The city is famous for its rich history, stunning gardens, and vibrant festivals.",
    },
  ];

  const packageInfo = [
    {
      img: MysoreImages.dp1,
      location: "Mysore Palace",
      price: "INR 399",
      desc: "Explore the grand Mysore Palace, a historical monument and the official residence of the Wadiyar dynasty.",
    },
    {
      img: MysoreImages.dp2,
      location: "Brindavan Gardens",
      price: "INR 299",
      desc: "Visit the beautiful Brindavan Gardens, known for its stunning landscapes and musical fountain show.",
    },
    {
      img: MysoreImages.dp3,
      location: "Chamundi Hill",
      price: "INR 199",
      desc: "Climb up to Chamundi Hill for panoramic views of Mysore and visit the famous Chamundeshwari Temple.",
    },
    {
      img: MysoreImages.dp4,
      location: "St. Philomena's Church",
      price: "INR 149",
      desc: "Discover St. Philomena's Church, one of the largest churches in India, known for its stunning Gothic architecture.",
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
          <span id="diff">E</span>verything you need to know about Mysore
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Mysore Trip!
                  <hr />
                </h2>
                <p>
                  Mysore is a city steeped in history and culture, offering a delightful blend of royal heritage, stunning architecture, and vibrant traditions. 
                  It's a perfect destination for history buffs and nature lovers alike.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={MysoreImages.dp1} alt="Mysore Palace" id="port1" />
            </div>
            <div className="img2">
              <img src={MysoreImages.dp2} alt="Brindavan Gardens" id="port2" />
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
