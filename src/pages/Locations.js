import "./Locations.css";
import goa from "../media/goa.jpg";
import manali from "../media/manali.jpg";
import rishikesh from "../media/rishikesh.jpg";
import agra from "../media/agra.jpg";
import jaipur from "../media/jaipur.jpg";
import shimla from "../media/shimla.jpg";
import darjeeling from "../media/darjeeling.jpg";
import alleppey from "../media/alleppey.jpg";
import varanasi from "../media/varanasi.jpg";
import amritsar from "../media/amritsar.jpg";
import mysore from "../media/mysore.jpg";
import ooty from "../media/ooty.jpg";
import andaman from "../media/andaman.jpg";
import lakshadweep from "../media/lakshadweep.jpg";
import jaisalmer from "../media/jaisalmer.jpg";
import leh from "../media/leh.jpg";
import pondicherry from "../media/pondicherry.jpg";
import kanyakumari from "../media/kanyakumari.jpg";
import shillong from "../media/shillong.jpg";
import coorg from "../media/coorg.jpg";
import mumbai from "../media/mumbai.jpg";
import bengaluru from "../media/bengaluru.jpg";
import chennai from "../media/chennai.jpg";
import kolkata from "../media/kolkata.jpg";
import hyderabad from "../media/hyderabad.jpg";
import nashik from "../media/nashik.jpg";
import ajmer from "../media/ajmer.jpg";
import kodaikanal from "../media/kodaikanal.jpg";
import mahabaleshwar from "../media/mahabaleshwar.jpg";
import khajuraho from "../media/khajuraho.jpg";
import udaipur from "../media/udaipur.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
  const packageInfoRow1 = [
    {
      place: "Goa",
      info: "Experience the vibrant nightlife and beautiful beaches of Goa.",
      img: goa,
    },
    {
      place: "Manali",
      info: "A popular hill station in Himachal Pradesh.",
      img: manali,
    },
    {
      place: "Rishikesh",
      info: "Known for adventure sports and yoga retreats.",
      img: rishikesh,
    },
    {
      place: "Agra",
      info: "Home to the iconic Taj Mahal, Agra is a must-visit destination.",
      img: agra,
    },
    {
      place: "Jaipur",
      info: "Experience the royal heritage of Jaipur, the Pink City.",
      img: jaipur,
    },
    {
      place: "Shimla",
      info: "The capital of Himachal Pradesh, known for its pleasant weather.",
      img: shimla,
    },
    {
      place: "Darjeeling",
      info: "Famous for its tea plantations and stunning views.",
      img: darjeeling,
    },
    {
      place: "Alleppey",
      info: "Known for its backwaters and houseboats.",
      img: alleppey,
    },
    {
      place: "Varanasi",
      info: "Experience the spiritual essence of India in Varanasi.",
      img: varanasi,
    },
    {
      place: "Amritsar",
      info: "Home to the Golden Temple, a sacred pilgrimage site.",
      img: amritsar,
    },
    {
      place: "Mysore",
      info: "Known for its royal heritage and magnificent palaces.",
      img: mysore,
    },
    {
      place: "Ooty",
      info: "Known as the Queen of Hill Stations.",
      img: ooty,
    },
    {
      place: "Andaman",
      info: "Relax on the pristine beaches of the Andaman Islands.",
      img: andaman,
    },
    {
      place: "Lakshadweep",
      info: "A tropical paradise with beautiful coral reefs.",
      img: lakshadweep,
    },
    {
      place: "Jaisalmer",
      info: "Explore the golden sands and forts of Jaisalmer.",
      img: jaisalmer,
    },
    {
      place: "Leh",
      info: "Experience the mesmerizing landscapes and unique culture of Ladakh.",
      img: leh,
    },
    {
      place: "Pondicherry",
      info: "A blend of French architecture and Indian culture.",
      img: pondicherry,
    },
    {
      place: "Kanyakumari",
      info: "Visit the southernmost point of India with beautiful sunsets.",
      img: kanyakumari,
    },
    {
      place: "Shillong",
      info: "Known for its beautiful waterfalls and natural beauty.",
      img: shillong,
    },
    {
      place: "Coorg",
      info: "Famous for its coffee plantations and scenic landscapes.",
      img: coorg,
    },
    {
      place: "Mumbai",
      info: "Explore the bustling city of Mumbai, known for its vibrant culture.",
      img: mumbai,
    },
    {
      place: "Bengaluru",
      info: "Known as the Silicon Valley of India.",
      img: bengaluru,
    },
    {
      place: "Chennai",
      info: "Enjoy the coastal beauty and rich culture of Chennai.",
      img: chennai,
    },
    {
      place: "Kolkata",
      info: "Discover the culture and heritage of Kolkata.",
      img: kolkata,
    },
    {
      place: "Hyderabad",
      info: "Explore the city of Nizams with rich history and modern attractions.",
      img: hyderabad,
    },
    {
      place: "Nashik",
      info: "Famous for its vineyards and temples.",
      img: nashik,
    },
    {
      place: "Ajmer",
      info: "A pilgrimage city known for the Ajmer Sharif Dargah.",
      img: ajmer,
    },
    {
      place: "Kodaikanal",
      info: "A beautiful hill station with pleasant weather.",
      img: kodaikanal,
    },
    {
      place: "Mahabaleshwar",
      info: "Known for its scenic beauty and strawberry farms.",
      img: mahabaleshwar,
    },
    {
      place: "Khajuraho",
      info: "Known for its ancient temples and sculptures.",
      img: khajuraho,
    },
    {
      place: "Udaipur",
      info: "Known for its lakes and palaces, the City of Lakes.",
      img: udaipur,
    },
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newFilteredPlaces = places.filter((place) =>
      place.place.toLowerCase().includes(searchField)
    );
    setFilteredPlaces(newFilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchField(search);
  };

  return (
    <div className="location-container">
      <Searchbox onChangeHandler={handleOnChange} placeholder="Search places" />
      <div className="package-cards-container">
        {filteredPlaces.map((place, index) => (
          <PackageCard
            key={index}
            placeName={place.place}
            info={place.info}
            img={place.img}
          />
        ))}
      </div>
    </div>
  );
};
