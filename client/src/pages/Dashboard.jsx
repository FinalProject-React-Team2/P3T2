
import UserStats from "../components/UserStats";
import UserOpenChallenges from "../components/UserOpenChallenges";
import DebateLists from "../components/DashboardComponents/DebateDropdown/index ";
import DebateDropdown from "../components/DashboardComponents/DebateDropdown/index";
// import CategoryMenu from "../components/CategoryMenu";

const Dashboard = () => {
  return (
    <div className="container">
      <UserStats />
      <UserOpenChallenges />
      <DebateLists />
      <DebateDropdown />
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Dashboard;
