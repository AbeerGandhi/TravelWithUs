import './Darjeeling.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { DarjeelingImages } from "../../../media/darjeeling/DarjeelingImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Darjeeling = () => {
  const placeInfo = [
    {
      placeName: "Darjeeling",
      tagline: "Queen of the Himalayas",
      desc: "Darjeeling is a scenic hill town in West Bengal, known for its tea gardens, panoramic views of the Himalayas, and the charming Toy Train ride. A perfect destination for nature lovers and adventure seekers.",
    },
  ];

  const packageInfo = [
    {
      img: DarjeelingImages.dp1,
      location: "Tiger Hill",
      price: "INR 899",
      desc: "Witness the spectacular sunrise over Mount Kanchenjunga from Tiger Hill, a must-visit spot for nature lovers and photographers.",
    },
    {
      img: DarjeelingImages.dp2,
      location: "Batasia Loop",
      price: "INR 499",
      desc: "Experience the famous Darjeeling Toy Train ride at Batasia Loop, offering stunning views of the Himalayas and lush valleys.",
    },
    {
      img: DarjeelingImages.dp3,
      location: "Padmaja Naidu Himalayan Zoological Park",
      price: "INR 599",
      desc: "Explore the unique wildlife of the Himalayas at the Padmaja Naidu Himalayan Zoological Park, home to red pandas and snow leopards.",
    },
    {
      img: DarjeelingImages.dp4,
      location: "Tea Gardens",
      price: "INR 799",
      desc: "Take a guided tour of Darjeeling's famous tea gardens, learn about tea cultivation, and taste the world-renowned Darjeeling tea.",
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
          <span id="diff">E</span>verything you need to know about Darjeeling
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Darjeeling Trip!
                  <hr />
                </h2>
                <p>
                  Darjeeling, with its breathtaking views of the Himalayas, sprawling tea gardens, and colonial charm, offers a peaceful escape. 
                  Whether you want to trek in the mountains or relax with a cup of tea, Darjeeling has something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={DarjeelingImages.d1} alt="Tiger Hill" id="port1" />
            </div>
            <div className="img2">
              <img src={DarjeelingImages.d2} alt="Batasia Loop" id="port2" />
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
