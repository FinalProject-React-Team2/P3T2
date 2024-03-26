import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

export default function UserMenu() {
  const loggedIn = Auth.loggedIn();
  console.log(loggedIn);

  if (loggedIn) {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    );
  } else {
    return (
    <div>
      
    </div>
    )
  }
}
