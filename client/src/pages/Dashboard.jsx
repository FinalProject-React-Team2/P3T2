// import UserStats from "../components/UserStats";
// import UserOpenChallenges from "../components/OpenChallenges/UserOpenChallenges";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_OPPONENT } from "../utils/mutations";
import Grid from "@mui/material/Unstable_Grid2";
// import DebateDropdowns from "../components/Dashboard/DebateDropdown/index.jsx";
// import CategoryMenu from "../components/CategoryMenu";
import UserOpenChallenges from "../components/Dashboard/UserDebates/UserOpenChallenges.jsx";
import UserActiveChallenges from "../components/Dashboard/UserDebates/UserActiveChallenges.jsx";
import OpenDebates from "../components/Dashboard/OpenDebates.jsx";
import AuthService from "../utils/auth";
import CreateDebate from "../components/Dashboard/CreateDebate.jsx";

const Dashboard = () => {
  const userName = AuthService.getProfile().data.firstName;
  const [addOpponent] = useMutation(ADD_OPPONENT);
  const navigate = useNavigate();
  const addOpponentHandler = async (id) => {
    await addOpponent({
      variables: { id },
    });
    navigate("/debate/" + id);
  };

  return (
    <>
      <h2 className="dashboardWelcome">{userName}&apos;s Dashboard</h2>

      <Grid container className="grid-container" spacing={6}>
        <Grid
          item
          className="grid-item "
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          key={1}
        >
          <p>
            <strong>User Stats</strong> :
          </p>
          {/* <UserStats /> */}
        </Grid>
        <Grid
          item
          className="grid-item "
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          key={2}
        >
          <p>
            <strong>Create Debate:</strong>
          </p>
          {/* <DebateDropdowns /> */}
          <CreateDebate />
        </Grid>

        <Grid
          item
          className="grid-item "
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          key={3}
        >
          <p className="activeDebates">
            <strong>Active Debates:</strong>
          </p>
          <UserActiveChallenges />
        </Grid>
        <Grid
          item
          className="grid-item "
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          key={4}
        >
          <p className="opendDebates">
            <strong>Open Debates:</strong>
          </p>
          <OpenDebates addOpponentHandler={addOpponentHandler} />
        </Grid>
        <Grid
          item
          className="grid-item "
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={10}
          key={5}
        >
          <p className="closedDebates">
            <strong>Concluded Debates:</strong>
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
