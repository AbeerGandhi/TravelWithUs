import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2195600952487!2d75.12117641437735!3d15.364590962016948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7356f725b09%3A0xe85a2e8c0e433478!2sOaks%202.0!5e0!3m2!1sen!2sin!4v1633436419361!5m2!1sen!2sin";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
            Our platform is designed to provide personalized recommendations based on your travel style,
            from hidden gems off the beaten path to popular tourist spots. 
            </p>
          </div>
        
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/servicesPage">Services</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"> TravelWithUs</i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook">_.TravelWithUs</i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter">@TravelWithUs</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">T</span>ravelWithUs  | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
