import Auth from "../../../utils/auth";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";
import "./nav.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


export default function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const currentPage = useLocation().pathname;

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const size = "sm";

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul
          className={`nav flex-row menu ${
            showDropdown ? "show-dropdown" : ""
          } `}
        >
          <li className="mx-3 nav-item currentDebates menu" key={1}>
            <Link
              to="/open&activedebates"
              className={
                currentPage === "open&activedebates"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Current Debates
            </Link>
          </li>

          <li className="mx-3 nav-item aboutus menu" key={2}>
            <Link
              to="/aboutus"
              className={
                currentPage === "/aboutus" ? "nav-link active" : "nav-link"
              }
            >
              About 
            </Link>
          </li>

          <li className="mx-3 nav-item logout menu" key={3}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" className="nav-link" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>

          <UserMenu />
          {/* Dropdown menu for small screens */}
          <li className={`nav-item dropdown d-${size}-none`} key={5}>
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Menu
            </button>
            <div
              className={`dropdown-menu${showDropdown ? " show" : ""} dropdown`}
            >
              <Link to="/open&activedebates" className="dropdown-item">
                Current Debates
              </Link>
              <Link to="/Aboutus" className="dropdown-item">
                About Us
              </Link>
              <a
                href="/"
                className="dropdown-item"
                onClick={() => Auth.logout()}
              >
                Logout
              </a>
              <Link to="/Dasboard" className="dropdown-item">
                Dashboard
              </Link>
             
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`nav flex-row menu ${
          showDropdown ? 'show-dropdown' : ''
        } `}>
          <li className="mx-3 nav-item signup menu" key={6}>
            <Link to="/signup" className={
                currentPage === "/signup" ? "nav-link active" : "nav-link"
              }>
              Signup
            </Link>
          </li>
          <li className="mx-3 nav-item login menu" key={7}>
            <Link to="/login" className={
                currentPage === "/login" ? "nav-link active" : "nav-link"
              }>
              Login
            </Link>
          </li>
          <li className="mx-3 nav-item aboutus menu" key={8}>
            <Link to="/aboutus" className={
                currentPage === "/aboutus" ? "nav-link active" : "nav-link"
              }>
              About 
            </Link>
          </li>
          {/* Dropdown menu for small screens */}
          <li className={`nav-item dropdown d-${size}-none`} key={9}>
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Menu
            </button>
            <div
              className={`dropdown-menu${showDropdown ?  'show' : ''} dropdown`}
            >
              <Link to="/Signup" className="dropdown-item">
                Signup
              </Link>
              <Link
                to="/Login"
                className="dropdown-item"
              >
                Login
              </Link>
              <Link to="/Aboutus" className="dropdown-item">
                About
              </Link>
             
            </div>
          </li>
        </ul>
      );
    }
  }

  return (
    
      <nav>{showNavigation()}</nav>
    
  );
}
