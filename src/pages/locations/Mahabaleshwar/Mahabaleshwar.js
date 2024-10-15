import './Mahabaleshwar.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { MahabaleshwarImages } from "../../../media/mahabaleshwar/MahabaleshwarImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Mahabaleshwar = () => {
  const placeInfo = [
    {
      placeName: "Mahabaleshwar",
      tagline: "The Evergreen Hill Station",
      desc: "Mahabaleshwar is a picturesque hill station known for its stunning valleys, pleasant climate, and lush green landscapes. It's a popular destination for nature lovers and adventure seekers.",
    },
  ];

  const packageInfo = [
    {
      img: MahabaleshwarImages.dp1,
      location: "Arthur's Seat",
      price: "INR 299",
      desc: "Visit Arthur's Seat for breathtaking views of the valleys and mountains, an ideal spot for nature enthusiasts.",
    },
    {
      img: MahabaleshwarImages.dp2,
      location: "Venna Lake",
      price: "INR 499",
      desc: "Enjoy boating and stunning scenery at Venna Lake, surrounded by lush greenery and hills.",
    },
    {
      img: MahabaleshwarImages.dp3,
      location: "Elephant's Head Point",
      price: "INR 199",
      desc: "Explore the famous Elephant's Head Point, known for its unique rock formation and panoramic views.",
    },
    {
      img: MahabaleshwarImages.dp4,
      location: "Pratapgad Fort",
      price: "INR 349",
      desc: "Discover the historical Pratapgad Fort, offering insights into Maratha history and stunning views of the Western Ghats.",
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
          <span id="diff">E</span>verything you need to know about Mahabaleshwar
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Mahabaleshwar Trip!
                  <hr />
                </h2>
                <p>
                  Mahabaleshwar is an idyllic hill station that offers a perfect retreat from the hustle and bustle of city life. 
                  Enjoy the cool climate, beautiful scenery, and delicious strawberries that the region is famous for.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={MahabaleshwarImages.d1} alt="Arthur's Seat" id="port1" />
            </div>
            <div className="img2">
              <img src={MahabaleshwarImages.d2} alt="Venna Lake" id="port2" />
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
``
