import './Amritsar.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { AmritsarImages } from "../../../media/amritsar/AmritsarImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Amritsar = () => {
  const placeInfo = [
    {
      placeName: "Amritsar",
      tagline: "The Spiritual and Cultural Hub of Punjab",
      desc: "Amritsar is famous for the Golden Temple, its rich history, and vibrant culture. It offers a unique blend of spirituality, tradition, and history, making it a must-visit destination in India.",
    },
  ];

  const packageInfo = [
    {
      img: AmritsarImages.dp1,
      location: "Golden Temple",
      price: "INR 2999",
      desc: "Visit the serene and beautiful Golden Temple, the holiest shrine in Sikhism, known for its stunning architecture and spiritual significance.",
    },
    {
      img: AmritsarImages.dp2,
      location: "Jallianwala Bagh",
      price: "INR 1999",
      desc: "Explore Jallianwala Bagh, a historical garden and memorial dedicated to the martyrs of the 1919 massacre, offering a somber glimpse into India's freedom struggle.",
    },
    {
      img: AmritsarImages.dp3,
      location: "Wagah Border",
      price: "INR 1499",
      desc: "Witness the patriotic Wagah Border ceremony, a daily military practice at the India-Pakistan border, filled with vibrant and energetic performances.",
    },
    {
      img: AmritsarImages.dp4,
      location: "Partition Museum",
      price: "INR 999",
      desc: "Visit the Partition Museum, a museum dedicated to telling the stories of the Partition of India in 1947, through a wide range of exhibits and artifacts.",
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
          <span id="diff">E</span>verything you need to know about Amritsar
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Amritsar Trip!
                  <hr />
                </h2>
                <p>
                  Amritsar, a city of immense historical and spiritual significance, is home to the 
                  Golden Temple and many other important landmarks. It offers a deep cultural 
                  experience that is both spiritual and historical.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={AmritsarImages.dp1} alt="Golden Temple" id="port1" />
            </div>
            <div className="img2">
              <img src={AmritsarImages.dp2} alt="Wagah Border Ceremony" id="port2" />
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
