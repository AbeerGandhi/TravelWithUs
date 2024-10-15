import './Shillong.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { ShillongImages } from "../../../media/shillong/ShillongImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Shillong = () => {
  const placeInfo = [
    {
      placeName: "Shillong",
      tagline: "The Scotland of India",
      desc: "Shillong, the capital of Meghalaya, is known for its rolling hills, lush greenery, and vibrant culture. With stunning landscapes and a rich musical heritage, it's a paradise for nature lovers and adventure seekers alike.",
    },
  ];

  const packageInfo = [
    {
      img: ShillongImages.dp1,
      location: "Umiam Lake",
      price: "INR 299",
      desc: "Visit the scenic Umiam Lake, perfect for boating, picnics, and enjoying the breathtaking views of the surrounding hills.",
    },
    {
      img: ShillongImages.dp2,
      location: "Elephant Falls",
      price: "INR 199",
      desc: "Experience the beauty of Elephant Falls, a picturesque waterfall surrounded by lush vegetation, ideal for nature photography.",
    },
    {
      img: ShillongImages.dp3,
      location: "Living Root Bridges",
      price: "INR 499",
      desc: "Explore the unique Living Root Bridges of Meghalaya, a remarkable example of nature's engineering, where tree roots are used to create sturdy bridges.",
    },
    {
      img: ShillongImages.dp4,
      location: "Shillong Peak",
      price: "INR 399",
      desc: "Enjoy panoramic views of the city from Shillong Peak, the highest point in Shillong, especially beautiful during sunrise and sunset.",
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
          <span id="diff">E</span>verything you need to know about Shillong
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Shillong Trip!
                  <hr />
                </h2>
                <p>
                  Shillong offers a delightful mix of natural beauty and cultural experiences. 
                  From stunning lakes to vibrant local markets, it promises an unforgettable journey through the hills of Meghalaya.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ShillongImages.d1} alt="Umiam Lake" id="port1" />
            </div>
            <div className="img2">
              <img src={ShillongImages.d2} alt="Elephant Falls" id="port2" />
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
