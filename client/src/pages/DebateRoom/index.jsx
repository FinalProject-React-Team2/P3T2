import { useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import { GET_DEBATE } from "../../utils/queries";
import Grid from "@mui/material/Unstable_Grid2";
import DebateInputs from "../../components/DebateRoom/DebateInputs";

function DebateRoom() {
  const { id } = useParams();
  // const {debate, setDebate} = useState({});
  const { loading, data } = useQuery(GET_DEBATE, { variables: { id } , pollInterval: 5000 });
  console.log("DATA", loading, data, id);

  // execute query to Debate details from graphql
  //populage local state with debate details
  const debate = data?.getDebate || {};
  console.log('DEBATE DATA', debate);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Grid container className="grid-container" style={{height: "150px", margin: "5px", padding: "1rem"}} spacing={1}>
      <Grid item  style={{height: "200px"}} xs={12} sm={12} md={12} lg={12} xl={12} key={1}>

        
      <div className="debateHeader">
        <div>
          <h2>{debate.title}</h2>
          <p>Challenger: {debate?.createdBy?.firstName || "error"}</p>
          <p>
            Opponent: {debate?.opponent?.firstName || "waiting for opponent..."}
          </p>
          <p>{debate.numOfRounds} Rounds</p>
        </div>
      </div>
      </Grid>
    </Grid>
      <DebateInputs debate={debate} id={debate._id} />
      {console.log("D.id" , debate._id)}
      
    </>
  );
}
export default DebateRoom;
