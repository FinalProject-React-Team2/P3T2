import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DEBATE } from "../../utils/queries";
import { ADD_OPPONENT } from "../../utils/mutations";


import AuthService from "../../utils/auth";
import Grid from "@mui/material/Unstable_Grid2";
import DebateInputs from "../../components/DebateRoom/DebateInputs";

function DebateRoom() {
  const { id } = useParams();
  // const {debate, setDebate} = useState({});
  const { loading, data } = useQuery(GET_DEBATE, { variables: { id } });
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
      <div className="container">
        <div>
          <h2>{debate.title}</h2>
          <p>Challenger: {debate?.createdBy?.firstName || "error"}</p>
          <p>
            Opponent: {debate?.opponent?.firstName || "waiting for opponent..."}
          </p>
          <p>{debate.numOfRounds} Rounds</p>
          {/* Display debate arguments, speakers, etc. */}

          {/* Comment Form */}
          {/* <form>
          <textarea></textarea>
          <button type="submit">Add Comment</button>
        </form> */}

          {/* Vote Form */}
          {/* <form>
          <input type="number" />
          <button type="submit">Vote</button>
        </form> */}
        </div>
      </div>
      <DebateInputs debate={debate} id={debate._id} />
      {console.log("D.id" , debate._id)};
      
    </>
  );
}
export default DebateRoom;
