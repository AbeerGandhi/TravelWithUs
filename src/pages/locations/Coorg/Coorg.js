import './Coorg.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { CoorgImages } from "../../../media/coorg/CoorgImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Coorg = () => {
  const placeInfo = [
    {
      placeName: "Coorg",
      tagline: "The Scotland of India",
      desc: "Coorg, also known as Kodagu, is a hill station in Karnataka famous for its coffee plantations, misty landscapes, and lush greenery. It's a perfect getaway for nature lovers and adventure enthusiasts.",
    },
  ];

  const packageInfo = [
    {
      img: CoorgImages.dp1,
      location: "Abbey Falls",
      price: "INR 799",
      desc: "Visit the mesmerizing Abbey Falls, nestled amidst coffee plantations and lush greenery, offering a serene experience.",
    },
    {
      img: CoorgImages.dp2,
      location: "Raja's Seat",
      price: "INR 499",
      desc: "Enjoy the panoramic views of misty valleys and hills at Raja's Seat, a famous sunset point in Coorg.",
    },
    {
      img: CoorgImages.dp3,
      location: "Dubare Elephant Camp",
      price: "INR 999",
      desc: "Get up close with elephants at Dubare Elephant Camp, where you can learn about and interact with these gentle giants.",
    },
    {
      img: CoorgImages.dp4,
      location: "Talakaveri",
      price: "INR 599",
      desc: "Explore Talakaveri, the origin point of the Kaveri River, surrounded by picturesque landscapes and a tranquil atmosphere.",
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
          <span id="diff">E</span>verything you need to know about Coorg
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Coorg Trip!
                  <hr />
                </h2>
                <p>
                  Coorg is known for its stunning landscapes, coffee plantations, and serene environment. 
                  Whether you're hiking through the hills or relaxing by the waterfalls, Coorg offers an unforgettable experience for all nature lovers.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={CoorgImages.d1} alt="Abbey Falls" id="port1" />
            </div>
            <div className="img2">
              <img src={CoorgImages.d2} alt="Raja's Seat" id="port2" />
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
