import './Manali.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { ManaliImages } from "../../../media/manali/ManaliImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Manali = () => {
  const placeInfo = [
    {
      placeName: "Manali",
      tagline: "The Adventure Capital of India",
      desc: "Manali is a beautiful hill station nestled in the mountains of Himachal Pradesh. Known for its stunning landscapes, adventure sports, and serene atmosphere, it is a popular destination for travelers and adventure enthusiasts.",
    },
  ];

  const packageInfo = [
    {
      img: ManaliImages.dp1,
      location: "Solang Valley",
      price: "INR 2999",
      desc: "Experience adventure sports like paragliding, zorbing, and skiing in the picturesque Solang Valley.",
    },
    {
      img: ManaliImages.dp2,
      location: "Rohtang Pass",
      price: "INR 4999",
      desc: "Visit the famous Rohtang Pass, known for its breathtaking views and snow-capped mountains.",
    },
    {
      img: ManaliImages.dp3,
      location: "Hadimba Temple",
      price: "INR 1999",
      desc: "Explore the ancient Hadimba Temple, surrounded by cedar forests and offering a serene atmosphere.",
    },
    {
      img: ManaliImages.dp4,
      location: "Manu Temple",
      price: "INR 2499",
      desc: "Discover the Manu Temple, a sacred site dedicated to the sage Manu, with stunning views of the valley.",
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
          <span id="diff">E</span>verything you need to know about Manali
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Manali Trip!
                  <hr />
                </h2>
                <p>
                  Manali is an enchanting hill station that offers stunning vistas and a plethora of adventure activities. 
                  Whether you seek relaxation or thrill, Manali has something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ManaliImages.dp1} alt="Solang Valley" id="port1" />
            </div>
            <div className="img2">
              <img src={ManaliImages.dp2} alt="Rohtang Pass" id="port2" />
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
