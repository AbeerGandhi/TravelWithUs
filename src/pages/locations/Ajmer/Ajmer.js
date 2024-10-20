import './Ajmer.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { AjmerImages } from "../../../media/ajmer/AjmerImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Ajmer = () => {
  const placeInfo = [
    {
      placeName: "Ajmer",
      tagline: "The City of Unity and Spirituality",
      desc: "Ajmer is a historic city known for the Ajmer Sharif Dargah and its deep cultural heritage. It is a hub for pilgrims and tourists seeking a spiritual and cultural experience.",
    },
  ];

  const packageInfo = [
    {
      img: AjmerImages.dp1,
      location: "Ajmer Sharif Dargah",
      price: "INR 2999",
      desc: "Visit the revered Ajmer Sharif Dargah, the shrine of the Sufi saint Khwaja Moinuddin Chishti, attracting millions of devotees from all over the world.",
    },
    {
      img: AjmerImages.dp2,
      location: "Ana Sagar Lake",
      price: "INR 1999",
      desc: "Relax by the beautiful Ana Sagar Lake, a man-made lake that offers stunning views, boating, and serene surroundings.",
    },
    {
      img: AjmerImages.dp3,
      location: "Adhai Din Ka Jhonpra",
      price: "INR 1499",
      desc: "Explore the ancient mosque, Adhai Din Ka Jhonpra, a masterpiece of Indo-Islamic architecture with its intricate carvings and historical significance.",
    },
    {
      img: AjmerImages.dp4,
      location: "Taragarh Fort",
      price: "INR 2499",
      desc: "Discover the historic Taragarh Fort, known for its massive structure and strategic importance, offering panoramic views of Ajmer city.",
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
          <span id="diff">E</span>verything you need to know about Ajmer
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Ajmer Trip!
                  <hr />
                </h2>
                <p>
                  Ajmer is a city of cultural and spiritual significance, known for its famous
                  pilgrimage sites and historical landmarks. Whether you are looking for peace,
                  history, or a spiritual experience, Ajmer has something to offer.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={AjmerImages.dp1} alt="Ajmer Sharif Dargah" id="port1" />
            </div>
            <div className="img2">
              <img src={AjmerImages.dp2} alt="Ana Sagar Lake" id="port2" />
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
