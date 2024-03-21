
// import UserStats from "../components/UserStats";
// import UserOpenChallenges from "../components/OpenChallenges/UserOpenChallenges";

import DebateDropdowns from "../components/DashboardComponents/DebateDropdown/index.jsx";
// import CategoryMenu from "../components/CategoryMenu";

const Dashboard = () => {
  return (
    <div className="container">
      {/* <UserStats /> */}
      <UserOpenChallenges />
      <DebateLists />
      <DebateDropdowns />
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Dashboard;
