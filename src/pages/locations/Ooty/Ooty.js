import './Ooty.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { OotyImages } from "../../../media/ooty/OotyImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Ooty = () => {
  const placeInfo = [
    {
      placeName: "Ooty",
      tagline: "The Queen of Hill Stations",
      desc: "Ooty, located in the Nilgiri Hills, is a popular hill station known for its stunning landscapes, pleasant weather, and lush greenery. It offers a perfect escape for nature lovers and adventure seekers.",
    },
  ];

  const packageInfo = [
    {
      img: OotyImages.dp1,
      location: "Ooty Lake",
      price: "INR 299",
      desc: "Enjoy boating at Ooty Lake, surrounded by beautiful gardens and scenic views. A perfect spot for a leisurely day.",
    },
    {
      img: OotyImages.dp2,
      location: "Nilgiri Mountain Railway",
      price: "INR 499",
      desc: "Experience a ride on the Nilgiri Mountain Railway, a UNESCO World Heritage Site offering breathtaking views of the hills.",
    },
    {
      img: OotyImages.dp3,
      location: "Botanical Gardens",
      price: "INR 199",
      desc: "Explore the lush greenery and diverse flora at the Botanical Gardens, a serene place to unwind and enjoy nature.",
    },
    {
      img: OotyImages.dp4,
      location: "Doddabetta Peak",
      price: "INR 249",
      desc: "Trek to Doddabetta Peak, the highest point in the Nilgiris, and enjoy panoramic views of the surrounding mountains and valleys.",
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
          <span id="diff">E</span>verything you need to know about Ooty
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Ooty Trip!
                  <hr />
                </h2>
                <p>
                  Ooty is known for its pleasant climate and breathtaking scenery, making it an ideal destination for families and couples. 
                  Whether you're looking to relax amidst nature or engage in outdoor activities, Ooty has something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={OotyImages.dp1} alt="Ooty Lake" id="port1" />
            </div>
            <div className="img2">
              <img src={OotyImages.dp2} alt="Botanical Gardens" id="port2" />
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
