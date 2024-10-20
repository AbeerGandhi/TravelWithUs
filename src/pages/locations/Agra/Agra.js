import './Agra.css'; // Ensure your CSS file has styles for background, images, etc.
import { TravelCard } from "../../../components/locations/TravelCard";
import { AgraImages } from "../../../media/agra/AgraImages"; // Import images
import PackCard from "../../../components/locations/PackCard";

export const Agra = () => {
  const placeInfo = [
    {
      placeName: "Agra",
      tagline: "Home to the Iconic Taj Mahal",
      desc: "Agra is famous for the majestic Taj Mahal, a symbol of love, and other historical monuments that showcase the rich Mughal heritage. Plan your visit to explore the beauty and history of Agra.",
    },
  ];

  const packageInfo = [
    {
      img: AgraImages.dp1,
      location: "Taj Mahal",
      price: "INR 4999",
      desc: "Visit the magnificent Taj Mahal, one of the Seven Wonders of the World, and witness its breathtaking beauty at sunrise.",
    },
    {
      img: AgraImages.dp2,
      location: "Agra Fort",
      price: "INR 3499",
      desc: "Explore the grand Agra Fort, a UNESCO World Heritage Site, which served as the residence of Mughal emperors.",
    },
    {
      img: AgraImages.dp3,
      location: "Fatehpur Sikri",
      price: "INR 2999",
      desc: "Take a trip to Fatehpur Sikri, the ancient city built by Emperor Akbar, known for its impressive architecture and historical significance.",
    },
    {
      img: AgraImages.dp4,
      location: "Mehtab Bagh",
      price: "INR 1999",
      desc: "Enjoy a peaceful evening at Mehtab Bagh, the perfect spot to get a panoramic view of the Taj Mahal during sunset.",
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
          <span id="diff">E</span>verything you need to know about Agra
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Agra Trip!
                  <hr />
                </h2>
                <p>
                  Agra is a city that blends history, culture, and beauty. From the Taj Mahal 
                  to other Mughal masterpieces, the city is an architectural treasure trove 
                  waiting to be explored.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={AgraImages.dp1} alt="Taj Mahal" id="port1" />
            </div>
            <div className="img2">
              <img src={AgraImages.dp2} alt="Agra Fort" id="port2" />
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
