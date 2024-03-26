import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
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
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="mx-1">
            <Link to="/Donations">Donations</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          DebateBros
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
