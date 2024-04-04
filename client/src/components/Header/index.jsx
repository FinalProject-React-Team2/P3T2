import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./style.css";
export default function Header() {
  return (
    <header>
      <h1 >
        <Link className="siteHeader" to="/" >
          <span className="logo-container" role="img">
            <img className="logo" src="/debateLogo.png" alt="gavel-block & cloud" />
          </span>
          DebateCloud
        </Link>
      </h1>
      <Nav />
 
    </header>
  );


}
