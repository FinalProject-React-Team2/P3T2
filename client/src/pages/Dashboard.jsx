// import UserStats from "../components/UserStats";
// import UserOpenChallenges from "../components/OpenChallenges/UserOpenChallenges";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_OPPONENT } from "../utils/mutations";

import DebateDropdowns from "../components/DashboardComponents/DebateDropdown/index.jsx";
// import CategoryMenu from "../components/CategoryMenu";
import UserOpenChallenges from "../components/DashboardComponents/UserDebates/UserOpenChallenges.jsx";
import UserActiveChallenges from "../components/DashboardComponents/UserDebates/UserActiveChallenges.jsx";
import OpenDebates from "../components/DashboardComponents/DebateDropdown/AllLists/OpenDebates.jsx";

const Dashboard = () => {
  const [addOpponent] = useMutation(ADD_OPPONENT);
  const navigate = useNavigate();
  const addOpponentHandler = async (id) => {
    await addOpponent({
      variables: { id },
    });
    navigate("/debate/" + id);
  };

  return (
    <div className="container">
      {/* <UserStats /> */}
      <OpenDebates addOpponentHandler={addOpponentHandler} />
      <Link to="/CreateDebate">
        <button>Create Debate</button>
      </Link>
      {/* <DebateDropdowns /> */}
      <UserActiveChallenges />
    </div>
  );
};

export default Dashboard;
