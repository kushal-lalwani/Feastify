import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <div className="flex justify-between shadow-lg p-4 m-2">
        <div className="logo-container">
          <img
            src={Logo}
            alt="App Logo"
            className="logo w-56"
          />
        </div>
        <div className="nav-items">
          <ul className="flex items-center">
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='/contact'>Contact</Link></li>
            <li className="px-4">Cart</li>
          </ul>
        </div>
      </div>
    );
  };
