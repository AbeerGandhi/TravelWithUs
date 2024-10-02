import "./Home.css";

import bgvideo from "../media/evening-bg.mp4";
import { Services } from "../components/Services";
import { BookSection } from "../components/BookSection";
import { PackageSection } from "../components/PackageSection";
import { ReviewSection } from "../components/ReviewSetion";

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home" id="home">
          <div className="content">
            <h3>
              Begin your <span id="diff">A</span>dventures with us
            </h3>
            <p>Explore the world with us for the best travel experience</p>
           
          </div>

          <div className="video-container">
            <video src={bgvideo} id="video-slider" loop autoPlay muted></video>
          </div>

          <div className="info">
            <div className="mail">
              <i className="fas fa-envelope" id="ficons"></i>
              <p>
                <a href="mailto:info.trabebo@gmail.com">
                  info.travelwithus@gmail.com
                </a>
              </p>
            </div>
            <div className="socialm">
              <i className="fab fa-instagram" id="ficons"></i>
              <p>travelwithus</p>
            </div>
            <div className="call">
              <i className="fas fa-phone-alt" id="ficons"></i>
              <p>
                <a href="tel:7259987584">+91-7259986969</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ReviewSection />
      <hr id="line" />
    </>
  );
};
