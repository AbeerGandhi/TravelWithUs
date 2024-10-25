// App.js
import React from "react";
import "./App.css";
import { AuthPage } from "./components/AuthPage";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { ServicesPage } from "./pages/ServicesPage";
import { WelcomePage } from "./components/WelcomePage";
import { Locations } from "./pages/Locations";
import { FeedbackPage } from "./pages/FeedbackPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
import { Error } from "./pages/Error";

// Importing all location components
import { Dubai } from "./pages/locations/Dubai/Dubai";
import { Himachal } from "./pages/locations/Himachal/Himachal";
import { Goa } from "./pages/locations/Goa/Goa";
import { Maldives } from "./pages/locations/Maldives/Maldives";
import { Thailand } from "./pages/locations/Thailand/Thailand";
import { Rajasthan } from "./pages/locations/Rajasthan/Rajasthan";
import { Kerala } from "./pages/locations/Kerala/Kerala";
import { Delhi } from "./pages/locations/Delhi/Delhi";
import { Manali } from "./pages/locations/Manali/Manali";
import { Rishikesh } from "./pages/locations/Rishikesh/Rishikesh";
import { Agra } from "./pages/locations/Agra/Agra";
import { Jaipur } from "./pages/locations/Jaipur/Jaipur";
import { Shimla } from "./pages/locations/Shimla/Shimla";
import { Darjeeling } from "./pages/locations/Darjeeling/Darjeeling";
import { Alleppey } from "./pages/locations/Alleppey/Alleppey";
import { Varanasi } from "./pages/locations/Varanasi/Varanasi";
import { Amritsar } from "./pages/locations/Amritsar/Amritsar";
import { Mysore } from "./pages/locations/Mysore/Mysore";
import { Ooty } from "./pages/locations/Ooty/Ooty";
import { Andaman } from "./pages/locations/Andaman/Andaman";
import { Lakshadweep } from "./pages/locations/Lakshadweep/Lakshadweep";
import { Jaisalmer } from "./pages/locations/Jaisalmer/Jaisalmer";
import { Leh } from "./pages/locations/Leh/Leh";
import { Pondicherry } from "./pages/locations/Pondicherry/Pondicherry";
import { Kanyakumari } from "./pages/locations/Kanyakumari/Kanyakumari";
import { Shillong } from "./pages/locations/Shillong/Shillong";
import { Coorg } from "./pages/locations/Coorg/Coorg";
import { Mumbai } from "./pages/locations/Mumbai/Mumbai";
import { Bengaluru } from "./pages/locations/Bengaluru/Bengaluru";
import { Chennai } from "./pages/locations/Chennai/Chennai";
import { Kolkata } from "./pages/locations/Kolkata/Kolkata";
import { Hyderabad } from "./pages/locations/Hyderabad/Hyderabad";
import { Nashik } from "./pages/locations/Nashik/Nashik";
import { Ajmer } from "./pages/locations/Ajmer/Ajmer";
import { Kodaikanal } from "./pages/locations/Kodaikanal/Kodaikanal";
import { Mahabaleshwar } from "./pages/locations/Mahabaleshwar/Mahabaleshwar";
import { Khajuraho } from "./pages/locations/Khajuraho/Khajuraho";
import { Udaipur } from "./pages/locations/Udaipur/Udaipur";

// List of locations with their corresponding components and paths
const locations = [
  { path: "/locations/dubai", component: <Dubai /> },
  { path: "/locations/himachal", component: <Himachal /> },
  { path: "/locations/goa", component: <Goa /> },
  { path: "/locations/maldives", component: <Maldives /> },
  { path: "/locations/thailand", component: <Thailand /> },
  { path: "/locations/rajasthan", component: <Rajasthan /> },
  { path: "/locations/kerala", component: <Kerala /> },
  { path: "/locations/delhi", component: <Delhi /> },
  { path: "/locations/manali", component: <Manali /> },
  { path: "/locations/rishikesh", component: <Rishikesh /> },
  { path: "/locations/agra", component: <Agra /> },
  { path: "/locations/jaipur", component: <Jaipur /> },
  { path: "/locations/shimla", component: <Shimla /> },
  { path: "/locations/darjeeling", component: <Darjeeling /> },
  { path: "/locations/alleppey", component: <Alleppey /> },
  { path: "/locations/varanasi", component: <Varanasi /> },
  { path: "/locations/amritsar", component: <Amritsar /> },
  { path: "/locations/mysore", component: <Mysore /> },
  { path: "/locations/ooty", component: <Ooty /> },
  { path: "/locations/andaman", component: <Andaman /> },
  { path: "/locations/lakshadweep", component: <Lakshadweep /> },
  { path: "/locations/jaisalmer", component: <Jaisalmer /> },
  { path: "/locations/leh", component: <Leh /> },
  { path: "/locations/pondicherry", component: <Pondicherry /> },
  { path: "/locations/kanyakumari", component: <Kanyakumari /> },
  { path: "/locations/shillong", component: <Shillong /> },
  { path: "/locations/coorg", component: <Coorg /> },
  { path: "/locations/mumbai", component: <Mumbai /> },
  { path: "/locations/bengaluru", component: <Bengaluru /> },
  { path: "/locations/chennai", component: <Chennai /> },
  { path: "/locations/kolkata", component: <Kolkata /> },
  { path: "/locations/hyderabad", component: <Hyderabad /> },
  { path: "/locations/nashik", component: <Nashik /> },
  { path: "/locations/ajmer", component: <Ajmer /> },
  { path: "/locations/kodaikanal", component: <Kodaikanal /> },
  { path: "/locations/mahabaleshwar", component: <Mahabaleshwar /> },
  { path: "/locations/khajuraho", component: <Khajuraho /> },
  { path: "/locations/udaipur", component: <Udaipur /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/servicesPage" element={<ServicesPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/locations" element={<Locations />} />
          
          {/* Dynamically rendering location routes */}
          {locations.map((location, index) => (
            <Route key={index} path={location.path} element={location.component} />
          ))}

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); 
}

export default App;
