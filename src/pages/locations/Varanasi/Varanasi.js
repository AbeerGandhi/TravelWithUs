import './Varanasi.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { VaranasiImages } from "../../../media/varanasi/VaranasiImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Varanasi = () => {
  const placeInfo = [
    {
      placeName: "Varanasi",
      tagline: "The Spiritual Capital of India",
      desc: "Varanasi, also known as Benaras or Kashi, is one of the oldest living cities in the world. It is a significant cultural and spiritual hub, famous for its ghats, temples, and the sacred Ganges River.",
    },
  ];

  const packageInfo = [
    {
      img: VaranasiImages.dp1,
      location: "Dashashwamedh Ghat",
      price: "INR 199",
      desc: "Witness the enchanting Ganga Aarti at Dashashwamedh Ghat, a mesmerizing ceremony that draws visitors from all over the world.",
    },
    {
      img: VaranasiImages.dp2,
      location: "Kashi Vishwanath Temple",
      price: "INR 299",
      desc: "Visit the iconic Kashi Vishwanath Temple, one of the most revered Hindu temples dedicated to Lord Shiva, rich in history and spirituality.",
    },
    {
      img: VaranasiImages.dp3,
      location: "Sarnath",
      price: "INR 499",
      desc: "Explore Sarnath, where Buddha delivered his first sermon, featuring ancient stupas, museums, and peaceful gardens.",
    },
    {
      img: VaranasiImages.dp4,
      location: "Manikarnika Ghat",
      price: "INR 199",
      desc: "Experience the unique traditions at Manikarnika Ghat, known as the primary cremation ghat, deeply tied to Varanasi's cultural heritage.",
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
          <span id="diff">E</span>verything you need to know about Varanasi
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Varanasi Trip!
                  <hr />
                </h2>
                <p>
                  Varanasi is a city that embodies the essence of spirituality and culture in India. 
                  From its sacred ghats to vibrant streets filled with life, it offers an unparalleled experience for travelers seeking to connect with the divine.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={VaranasiImages.dp1} alt="Ganga Aarti" id="port1" />
            </div>
            <div className="img2">
              <img src={VaranasiImages.dp2} alt="Kashi Vishwanath Temple" id="port2" />
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
