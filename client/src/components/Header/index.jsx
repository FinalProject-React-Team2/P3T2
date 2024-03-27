import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./style.css";
export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          DebateBros
        </Link>
      </h1>
      <Nav />
 
    </header>
  );
}
