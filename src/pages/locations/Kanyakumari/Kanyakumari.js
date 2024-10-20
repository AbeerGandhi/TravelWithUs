import './Kanyakumari.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { KanyakumariImages } from "../../../media/kanyakumari/KanyakumariImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Kanyakumari = () => {
  const placeInfo = [
    {
      placeName: "Kanyakumari",
      tagline: "The Land of Sunrise and Sunset",
      desc: "Kanyakumari, the southernmost tip of India, is known for its stunning sunsets, beautiful beaches, and rich cultural heritage. It’s a unique blend of natural beauty and spirituality.",
    },
  ];

  const packageInfo = [
    {
      img: KanyakumariImages.dp1,
      location: "Vivekananda Rock Memorial",
      price: "INR 399",
      desc: "Visit the iconic Vivekananda Rock Memorial, a monument dedicated to Swami Vivekananda, offering stunning views of the sea.",
    },
    {
      img: KanyakumariImages.dp2,
      location: "Thiruvalluvar Statue",
      price: "INR 299",
      desc: "Admire the Thiruvalluvar Statue, a towering tribute to the famous Tamil poet and philosopher, located on a small island.",
    },
    {
      img: KanyakumariImages.dp3,
      location: "Kanyakumari Beach",
      price: "INR 199",
      desc: "Relax at Kanyakumari Beach, known for its pristine sands and the mesmerizing view of the sunrise and sunset.",
    },
    {
      img: KanyakumariImages.dp4,
      location: "Cape Comorin",
      price: "INR 499",
      desc: "Experience the beauty of Cape Comorin, where the Arabian Sea, Indian Ocean, and Bay of Bengal meet.",
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
          <span id="diff">E</span>verything you need to know about Kanyakumari
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Kanyakumari Trip!
                  <hr />
                </h2>
                <p>
                  Kanyakumari, with its beautiful landscapes and rich history, offers a unique travel experience. 
                  Whether you’re seeking spirituality, adventure, or relaxation, Kanyakumari has something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={KanyakumariImages.dp1} alt="Vivekananda Rock Memorial" id="port1" />
            </div>
            <div className="img2">
              <img src={KanyakumariImages.dp2} alt="Thiruvalluvar Statue" id="port2" />
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
