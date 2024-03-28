import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./style.css";
export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <span className="logo-container" role="img" aria-label="gavel-block & cloud">
            <img className="logo" src="Debate Cloud Logo.png" alt="" />
          </span>
          DebateCloud
        </Link>
      </h1>
      <Nav />
 
    </header>
  );
}
