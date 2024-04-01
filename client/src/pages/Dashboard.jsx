// import UserStats from "../components/UserStats";
// import UserOpenChallenges from "../components/OpenChallenges/UserOpenChallenges";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_OPPONENT } from "../utils/mutations";
import Grid from "@mui/material/Unstable_Grid2";
// import DebateDropdowns from "../components/Dashboard/DebateDropdown/index.jsx";
// import CategoryMenu from "../components/CategoryMenu";

import UserActiveChallenges from "../components/Dashboard/UserDebates/UserActiveChallenges.jsx";
import OpenDebates from "../components/Dashboard/OpenDebates.jsx";
import AuthService from "../utils/auth";
import CreateDebate from "../components/Dashboard/CreateDebate.jsx";

const Dashboard = () => {
  const userName = AuthService.getProfile().data.firstName;
  const [addOpponent] = useMutation(ADD_OPPONENT);
  const navigate = useNavigate();
  const addOpponentHandler = async (id) => {
    console.log("ADD OPPONENT", id);
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
          <h2>
            <strong>User Stats</strong> :
          </h2>
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
          <h2>
            <strong>Create a Debate:</strong>
          </h2>
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
          <h2 className="activeDebates">
            <strong>Active Debates:</strong>
          </h2>
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
          <h2 className="opendDebates">
            <strong>Open Debates:</strong>
          </h2>
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
          <h2 className="closedDebates">
            <strong>Concluded Debates:</strong>
          </h2>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
