import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <nav>
      <div className="logo">
        <Link to="/"><span>T</span>ravelWithUs</Link>
        <p>Travel made easy</p>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active"><Link to="/">Home</Link></li>
        
        <li><Link to="/servicesPage" id="d">Services</Link></li>
        
        <li id="drop">
        <Link to="/locations" id="d">Locations</Link>
          <ul>
            <li><Link to="/locations/goa" id="d">Goa</Link></li>
            <li>
            <Link to="/locations/uttarakhand" id="d">Uttarakhand</Link>
            </li>
            <li>
            <Link to="/locations/kerala" id="d">Kerala</Link>
            </li>
            <li>
            <Link to="/locations/chennai" id="d">Chennai</Link>
            </li>
            <li>
            <Link to="/locations/delhi" id="d">Delhi</Link>
            </li>
            <li>
            <Link to="/locations/rajasthan" id="d">Rajasthan</Link>
            </li>
            <li>
            <Link to="/locations" id="d">View all..</Link>
            </li>
          </ul>
        </li>
        <li id="drop">
        <Link to="/locations" id="d">Feedbacks</Link>
          
        </li>
        <li><Link to="/auth">Login / Sign Up</Link></li>
      </ul>
    </nav>
  )
}