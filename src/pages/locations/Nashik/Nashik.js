import './Nashik.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { NashikImages } from "../../../media/nashik/NashikImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Nashik = () => {
  const placeInfo = [
    {
      placeName: "Nashik",
      tagline: "The Wine Capital of India",
      desc: "Nashik is renowned for its vineyards and wine production, as well as its religious significance with the Kumbh Mela. Nestled in the Western Ghats, it offers a mix of natural beauty and cultural heritage.",
    },
  ];

  const packageInfo = [
    {
      img: NashikImages.dp1,
      location: "Sula Vineyards",
      price: "INR 1999",
      desc: "Experience a delightful tour of Sula Vineyards, taste various wines, and enjoy scenic views of the vineyards.",
    },
    {
      img: NashikImages.dp2,
      location: "Pandav Leni",
      price: "INR 499",
      desc: "Explore the ancient rock-cut caves of Pandav Leni, known for their historical significance and stunning architecture.",
    },
    {
      img: NashikImages.dp3,
      location: "Kalaram Temple",
      price: "INR 299",
      desc: "Visit the sacred Kalaram Temple, an important pilgrimage site dedicated to Lord Rama, featuring beautiful carvings and serene surroundings.",
    },
    {
      img: NashikImages.dp4,
      location: "Anjneri Hill",
      price: "INR 799",
      desc: "Trek to Anjneri Hill, the birthplace of Lord Hanuman, offering panoramic views and a peaceful environment.",
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
          <span id="diff">E</span>verything you need to know about Nashik
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Nashik Trip!
                  <hr />
                </h2>
                <p>
                  Nashik is a city that beautifully blends spirituality and natural beauty, making it a unique destination for travelers. 
                  From vineyards to temples, Nashik offers diverse experiences that cater to all kinds of visitors.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={NashikImages.d1} alt="Sula Vineyards" id="port1" />
            </div>
            <div className="img2">
              <img src={NashikImages.d2} alt="Pandav Leni" id="port2" />
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
