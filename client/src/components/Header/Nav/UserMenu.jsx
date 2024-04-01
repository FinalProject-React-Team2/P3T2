import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

export default function UserMenu() {
  const loggedIn = Auth.loggedIn();
  console.log(loggedIn);

  if (loggedIn) {
    return (
     
        <li className="mx-3 nav-item menu">
          <Link className="nav-link" to="/Dashboard">Dashboard</Link>
        </li>
      
    );
  } else {
    return (
    <div>
      
    </div>
    )
  }
}
