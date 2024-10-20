import './Kolkata.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { KolkataImages } from "../../../media/kolkata/KolkataImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Kolkata = () => {
  const placeInfo = [
    {
      placeName: "Kolkata",
      tagline: "The City of Joy",
      desc: "Kolkata, known for its rich cultural heritage, is a vibrant city filled with historical landmarks, delicious cuisine, and a lively arts scene. Experience the warmth and hospitality of the City of Joy.",
    },
  ];

  const packageInfo = [
    {
      img: KolkataImages.dp1,
      location: "Victoria Memorial",
      price: "INR 299",
      desc: "Visit the iconic Victoria Memorial, a magnificent marble structure dedicated to Queen Victoria, surrounded by beautiful gardens.",
    },
    {
      img: KolkataImages.dp2,
      location: "Howrah Bridge",
      price: "INR 199",
      desc: "Explore the famous Howrah Bridge, a symbol of Kolkata, and enjoy the bustling atmosphere of the Hooghly River.",
    },
    {
      img: KolkataImages.dp3,
      location: "Dakshineswar Kali Temple",
      price: "INR 399",
      desc: "Experience the spiritual ambiance at Dakshineswar Kali Temple, an important pilgrimage site dedicated to Goddess Kali.",
    },
    {
      img: KolkataImages.dp4,
      location: "New Market",
      price: "INR 249",
      desc: "Shop at New Market, a bustling marketplace known for its variety of goods, from textiles to street food.",
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
          <span id="diff">E</span>verything you need to know about Kolkata
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Kolkata Trip!
                  <hr />
                </h2>
                <p>
                  Kolkata is a city that offers a blend of tradition and modernity. 
                  From its historic landmarks to its diverse cuisine, there’s so much to explore in the City of Joy.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={KolkataImages.dp1} alt="Victoria Memorial" id="port1" />
            </div>
            <div className="img2">
              <img src={KolkataImages.dp2} alt="Howrah Bridge" id="port2" />
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
