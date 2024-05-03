import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={Logo}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
