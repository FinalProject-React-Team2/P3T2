import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import "./nav.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row nav menu">
          
            <li className="mx-3 ">
              <Link to="/open&activedebates" className="nav-link">
                Current Debates
              </Link>
            </li>
          
          
            <li className="mx-3 nav-item menu">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>
          
          
            <li className="mx-3 nav-item menu">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" className="nav-link" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          
          
            <UserMenu />
          
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav menu">
          <li className="mx-3 menu">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="mx-3 nav-item menu">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="mx-3 nav-item menu">
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
          </li>
          {/* <li className="mx-3 nav-item menu">
            <Link to="/Donations" className="nav-link">
              Donations
            </Link>
          </li> */}
        </ul>
      );
    }
  }

  return (
    <>
      <nav>{showNavigation()}</nav>
    </>
  );
}

export default Nav;
