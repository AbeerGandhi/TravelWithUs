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
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Manali",
      info: "A popular hill station in Himachal Pradesh.",
      img: manali,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Rishikesh",
      info: "Known for adventure sports and yoga retreats.",
      img: rishikesh,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Agra",
      info: "Home to the iconic Taj Mahal, Agra is a must-visit destination.",
      img: agra,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Jaipur",
      info: "Experience the royal heritage of Jaipur, the Pink City.",
      img: jaipur,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Shimla",
      info: "The capital of Himachal Pradesh, known for its pleasant weather.",
      img: shimla,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Darjeeling",
      info: "Famous for its tea plantations and stunning views.",
      img: darjeeling,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Alleppey",
      info: "Known for its backwaters and houseboats.",
      img: alleppey,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Varanasi",
      info: "Experience the spiritual essence of India in Varanasi.",
      img: varanasi,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Amritsar",
      info: "Home to the Golden Temple, a sacred pilgrimage site.",
      img: amritsar,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Mysore",
      info: "Known for its royal heritage and magnificent palaces.",
      img: mysore,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Ooty",
      info: "Known as the Queen of Hill Stations.",
      img: ooty,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Andaman and Nicobar Islands",
      info: "Relax on the pristine beaches of the Andaman Islands.",
      img: andaman,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Lakshadweep",
      info: "A tropical paradise with beautiful coral reefs.",
      img: lakshadweep,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Jaisalmer",
      info: "Explore the golden sands and forts of Jaisalmer.",
      img: jaisalmer,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Leh",
      info: "Experience the mesmerizing landscapes and unique culture of Ladakh.",
      img: leh,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Pondicherry",
      info: "A blend of French architecture and Indian culture.",
      img: pondicherry,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Kanyakumari",
      info: "Visit the southernmost point of India with beautiful sunsets.",
      img: kanyakumari,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Shillong",
      info: "Known for its beautiful waterfalls and natural beauty.",
      img: shillong,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Coorg",
      info: "Famous for its coffee plantations and scenic landscapes.",
      img: coorg,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Mumbai",
      info: "Explore the bustling city of Mumbai, known for its vibrant culture.",
      img: mumbai,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Bengaluru",
      info: "Known as the Silicon Valley of India.",
      img: bengaluru,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Chennai",
      info: "Enjoy the coastal beauty and rich culture of Chennai.",
      img: chennai,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Kolkata",
      info: "Discover the culture and heritage of Kolkata.",
      img: kolkata,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Hyderabad",
      info: "Explore the city of Nizams with rich history and modern attractions.",
      img: hyderabad,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Nashik",
      info: "Famous for its vineyards and temples.",
      img: nashik,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Ajmer",
      info: "A pilgrimage city known for the Ajmer Sharif Dargah.",
      img: ajmer,
      price: "3000-4000 INR", // Low budget
    },
    {
      place: "Kodaikanal",
      info: "A beautiful hill station with pleasant weather.",
      img: kodaikanal,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Mahabaleshwar",
      info: "Known for its scenic beauty and strawberry farms.",
      img: mahabaleshwar,
      price: "5000-6000 INR", // Medium budget
    },
    {
      place: "Khajuraho",
      info: "Known for its ancient temples and sculptures.",
      img: khajuraho,
      price: "8000-10000 INR", // High budget
    },
    {
      place: "Udaipur",
      info: "Known for its lakes and palaces, the City of Lakes.",
      img: udaipur,
      price: "5000-6000 INR", // Medium budget
    }
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
            price={place.price}
          />
        ))}
      </div>
    </div>
  );
};
