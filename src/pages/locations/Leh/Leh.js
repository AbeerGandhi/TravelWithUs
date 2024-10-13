import './Leh.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { LehImages } from "../../../media/leh/LehImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Leh = () => {
  const placeInfo = [
    {
      placeName: "Leh",
      tagline: "The Land of High Passes",
      desc: "Leh, the capital of the Indian Himalayan region of Ladakh, is known for its stunning landscapes, rich culture, and ancient monasteries. A perfect destination for adventure seekers and nature lovers.",
    },
  ];

  const packageInfo = [
    {
      img: LehImages.dp1,
      location: "Pangong Lake",
      price: "INR 5999",
      desc: "Visit the breathtaking Pangong Lake, famous for its changing colors and stunning views.",
    },
    {
      img: LehImages.dp2,
      location: "Nubra Valley",
      price: "4999",
      desc: "Explore the Nubra Valley, known for its sand dunes, double-humped camels, and picturesque landscapes.",
    },
    {
      img: LehImages.dp3,
      location: "Thiksey Monastery",
      price: "INR 1999",
      desc: "Discover the spiritual ambiance at Thiksey Monastery, a prominent Buddhist monastery with stunning architecture.",
    },
    {
      img: LehImages.dp4,
      location: "Khardung La",
      price: "INR 2499",
      desc: "Experience the thrill of Khardung La, one of the highest motorable roads in the world, offering stunning views.",
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
          <span id="diff">E</span>verything you need to know about Leh
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Leh Trip!
                  <hr />
                </h2>
                <p>
                  Leh is a captivating destination that offers breathtaking views and a rich cultural experience. 
                  From ancient monasteries to stunning landscapes, Leh is a paradise for adventure enthusiasts and nature lovers alike.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={LehImages.d1} alt="Pangong Lake" id="port1" />
            </div>
            <div className="img2">
              <img src={LehImages.d2} alt="Nubra Valley" id="port2" />
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
