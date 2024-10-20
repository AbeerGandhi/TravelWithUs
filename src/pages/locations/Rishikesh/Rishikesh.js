import './Rishikesh.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { RishikeshImages } from '../../../media/rishikesh/RishikeshImages';
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Rishikesh = () => {
  const placeInfo = [
    {
      placeName: "Rishikesh",
      tagline: "The Yoga Capital of the World",
      desc: "Rishikesh, nestled in the foothills of the Himalayas, is a spiritual hub known for its yoga and meditation retreats. The sacred Ganges river and serene environment make it an ideal destination for relaxation and adventure.",
    },
  ];

  const packageInfo = [
    {
      img: RishikeshImages.dp1,
      location: "Ganga Aarti",
      price: "INR 299",
      desc: "Witness the mesmerizing Ganga Aarti, a spiritual ceremony held every evening by the riverbank, with music, chants, and beautiful diyas.",
    },
    {
      img: RishikeshImages.dp2,
      location: "River Rafting",
      price: "INR 999",
      desc: "Experience thrilling river rafting in the Ganges, an adventure activity that attracts thrill-seekers from around the world.",
    },
    {
      img: RishikeshImages.dp3,
      location: "Yoga Retreats",
      price: "INR 1999",
      desc: "Join a yoga retreat in Rishikesh and immerse yourself in ancient practices, mindfulness, and wellness in a serene environment.",
    },
    {
      img: RishikeshImages.dp4,
      location: "Laxman Jhula",
      price: "INR 199",
      desc: "Visit Laxman Jhula, an iconic suspension bridge offering stunning views of the Ganges and the surrounding hills.",
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
          <span id="diff">E</span>verything you need to know about Rishikesh
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Rishikesh Trip!
                  <hr />
                </h2>
                <p>
                  Rishikesh is not just a destination for spiritual seekers; it's also a paradise for adventure enthusiasts. 
                  From yoga to river rafting, it offers a unique blend of tranquility and thrill, making it a perfect getaway.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RishikeshImages.d1} alt="Ganga Aarti" id="port1" />
            </div>
            <div className="img2">
              <img src={RishikeshImages.d2} alt="River Rafting" id="port2" />
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
