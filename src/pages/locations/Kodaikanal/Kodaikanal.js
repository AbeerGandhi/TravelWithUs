import './Kodaikanal.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { KodaikanalImages } from "../../../media/kodaikanal/KodaikanalImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Kodaikanal = () => {
  const placeInfo = [
    {
      placeName: "Kodaikanal",
      tagline: "The Princess of Hill Stations",
      desc: "Kodaikanal is a beautiful hill station in Tamil Nadu, known for its scenic landscapes, serene lakes, and lush greenery. It offers a perfect getaway for nature lovers and adventure enthusiasts.",
    },
  ];

  const packageInfo = [
    {
      img: KodaikanalImages.dp1,
      location: "Kodaikanal Lake",
      price: "INR 299",
      desc: "Enjoy boating and cycling around the picturesque Kodaikanal Lake, surrounded by misty hills.",
    },
    {
      img: KodaikanalImages.dp2,
      location: "Coaker's Walk",
      price: "INR 199",
      desc: "Stroll along Coaker's Walk, a scenic pathway offering stunning views of the valley and hills.",
    },
    {
      img: KodaikanalImages.dp3,
      location: "Pillar Rocks",
      price: "INR 399",
      desc: "Visit the majestic Pillar Rocks, three giant rock formations that offer breathtaking views of the surrounding area.",
    },
    {
      img: KodaikanalImages.dp4,
      location: "Bear Shola Falls",
      price: "INR 249",
      desc: "Relax at Bear Shola Falls, a beautiful waterfall surrounded by lush greenery, perfect for picnics and nature walks.",
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
          <span id="diff">E</span>verything you need to know about Kodaikanal
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Kodaikanal Trip!
                  <hr />
                </h2>
                <p>
                  Kodaikanal is a breathtaking hill station that offers a perfect blend of tranquility and adventure. 
                  Whether you're exploring the scenic landscapes or enjoying the local cuisine, Kodaikanal is a destination that will leave you enchanted.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={KodaikanalImages.d1} alt="Kodaikanal Lake" id="port1" />
            </div>
            <div className="img2">
              <img src={KodaikanalImages.d2} alt="Coaker's Walk" id="port2" />
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
