import './Hyderabad.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { HyderabadImages } from "../../../media/hyderabad/HyderabadImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Hyderabad = () => {
  const placeInfo = [
    {
      placeName: "Hyderabad",
      tagline: "The City of Pearls",
      desc: "Hyderabad is known for its rich history, culture, and culinary delights. From historic landmarks to vibrant markets, Hyderabad offers a unique blend of tradition and modernity.",
    },
  ];

  const packageInfo = [
    {
      img: HyderabadImages.dp1,
      location: "Charminar",
      price: "INR 599",
      desc: "Visit the iconic Charminar, a symbol of Hyderabad's rich heritage and architectural marvel.",
    },
    {
      img: HyderabadImages.dp2,
      location: "Golconda Fort",
      price: "INR 799",
      desc: "Explore the historic Golconda Fort, known for its stunning architecture and panoramic views of the city.",
    },
    {
      img: HyderabadImages.dp3,
      location: "Hussain Sagar Lake",
      price: "INR 499",
      desc: "Relax by the picturesque Hussain Sagar Lake, featuring the impressive Buddha statue in the middle.",
    },
    {
      img: HyderabadImages.dp4,
      location: "Ramoji Film City",
      price: "INR 999",
      desc: "Experience the magic of cinema at Ramoji Film City, one of the largest film cities in the world, offering fun rides and shows.",
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
          <span id="diff">E</span>verything you need to know about Hyderabad
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Hyderabad Trip!
                  <hr />
                </h2>
                <p>
                  Hyderabad, with its historical landmarks, delicious cuisine, and modern amenities, is a must-visit destination in India. 
                  From savoring Hyderabadi Biryani to exploring ancient forts, the city offers a rich cultural experience for every traveler.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HyderabadImages.d1} alt="Charminar" id="port1" />
            </div>
            <div className="img2">
              <img src={HyderabadImages.d2} alt="Golconda Fort" id="port2" />
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
