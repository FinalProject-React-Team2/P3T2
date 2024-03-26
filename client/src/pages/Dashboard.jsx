
// import UserStats from "../components/UserStats";
// import UserOpenChallenges from "../components/OpenChallenges/UserOpenChallenges";

import DebateDropdowns from "../components/DashboardComponents/DebateDropdown/index.jsx";
// import CategoryMenu from "../components/CategoryMenu";
import UserOpenChallenges from "../components/DashboardComponents/UserDebates/UserOpenChallenges.jsx";
import UserActiveChallenges from "../components/DashboardComponents/UserDebates/UserActiveChallenges.jsx";

const Dashboard = () => {
  return (
    <div className="container">
      {/* <UserStats /> */}
    
      <DebateDropdowns />
      <UserActiveChallenges />
      <UserOpenChallenges />
    
    
    </div>
  );
};

export default Dashboard;
