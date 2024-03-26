import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import "./nav.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
            <li className="mx-1">
            <Link to="/open&activedebates">Current Debates</Link>
          </li>
          <li className="mx-1">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mx-1">
            <Link to="/Donations">Donations</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="flex-row px-1">


      <nav>{showNavigation()}</nav>
    </div>
  );
}

export default Nav;
