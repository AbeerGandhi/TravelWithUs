import './Shimla.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { ShimlaImages } from "../../../media/shimla/ShimlaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Shimla = () => {
  const placeInfo = [
    {
      placeName: "Shimla",
      tagline: "The Queen of Hills",
      desc: "Shimla, the capital of Himachal Pradesh, is renowned for its colonial architecture, beautiful landscapes, and pleasant weather. This charming hill station offers a perfect escape for nature lovers and adventure seekers alike.",
    },
  ];

  const packageInfo = [
    {
      img: ShimlaImages.dp1,
      location: "Mall Road",
      price: "INR 199",
      desc: "Stroll along Mall Road, the main street lined with shops, cafes, and stunning views of the surrounding mountains.",
    },
    {
      img: ShimlaImages.dp2,
      location: "Jakhoo Temple",
      price: "INR 299",
      desc: "Visit Jakhoo Temple, dedicated to Lord Hanuman, situated at the highest peak in Shimla, offering breathtaking panoramic views.",
    },
    {
      img: ShimlaImages.dp3,
      location: "The Ridge",
      price: "INR 199",
      desc: "Explore The Ridge, a large open space in the heart of Shimla, known for its beautiful views and vibrant atmosphere.",
    },
    {
      img: ShimlaImages.dp4,
      location: "Kufri",
      price: "INR 499",
      desc: "Enjoy a trip to Kufri, a popular hill station near Shimla, known for its scenic beauty and adventure activities like skiing and horse riding.",
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
          <span id="diff">E</span>verything you need to know about Shimla
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Shimla Trip!
                  <hr />
                </h2>
                <p>
                  Shimla, with its stunning landscapes and pleasant climate, is the perfect destination for a relaxing getaway. 
                  Enjoy scenic walks, explore the local culture, and indulge in adventure activities amidst the beautiful mountains.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ShimlaImages.dp1} alt="Mall Road" id="port1" />
            </div>
            <div className="img2">
              <img src={ShimlaImages.dp2} alt="Jakhoo Temple" id="port2" />
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
