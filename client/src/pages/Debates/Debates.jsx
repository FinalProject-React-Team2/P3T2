// DebatesList.js or a similar file

import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_DEBATES } from "../../utils/queries"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import { ADD_OPPONENT } from "../../utils/mutations"; // Adjust the import path as necessary
import AuthService from "../../utils/auth";
import OpenDebates from "../../components/Dashboard/OpenDebates";
import Grid from "@mui/material/Unstable_Grid2";

const Debates = () => {
  const { loading, error, data } = useQuery(GET_DEBATES);
  const activeDebates = data?.getDebates.filter(
    (debate) => debate.status === "active"
  );
  console.log("ACTIVE DEBATES", activeDebates);

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

  if (loading) return <p>Loading debates...</p>;
  if (error) return <p>Error loading debates!</p>;

  if (data.getDebates.length === 0) {
    return (
      <p>
        Sorry, no debates are available. Return to your
        <Link to="/dashboard"> Dashboard to Create one!</Link>
      </p>
    );
  }

  const listStyle = {
    // listStyleType: "none",
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    
    position: 'absolute',
    top: "20vh", 
    left: 0,
    right: 0,
 
  }

  const gridItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: '70vh', 
    overFlowY: 'auto',
  }

  return (
    <div>
      <h1 style={{margin: 0}}>
        Welcome {userName}!
      </h1>
    <Grid container style={gridStyle} spacing={2}>
        <Grid item className="grid-item" key={1} xs={6} sm={6} md={5} lg={5} xl={5} style={gridItemStyle}>
          <div className="container" style={{height: '80vh'}}>
            <h2>Spectate An Active Debate:</h2>
            <ol style={listStyle}>
              {activeDebates.map(({ createdBy, opponent, _id, title, status }) => (
                <li key={_id}>
                  {/* Replace '/debate-room/' with your actual route */}
                  <Link to={`/debate/${_id}`}>
                    <h3>
                      {`👥
                      ${createdBy.firstName} vs. ${opponent.firstName} "${title}" is (${status.toUpperCase()})`}
                    </h3>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Grid>
        <Grid item className="grid-item" key={2} xs={6} sm={6} md={5} lg={5} xl={5} style={gridItemStyle}>
          <div className="container" style={{height: '80vh'}}>
            <h2>Or Join as an Opponent</h2>
            <OpenDebates addOpponentHandler={addOpponentHandler} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Debates;
