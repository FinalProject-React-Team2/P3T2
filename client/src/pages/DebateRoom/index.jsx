import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { END_DEBATE } from "../../utils/mutations";
import { GET_DEBATE } from "../../utils/queries";
import DebateInputs from "../../components/DebateRoom/DebateInputs";
import ScoreBoard from "../../components/DebateRoom/ScoreBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function DebateRoom() {
  const { id } = useParams();
  // const [debate, setDebate] = useState({});
  const data = useQuery(GET_DEBATE, {
    variables: { id },
    pollInterval: 2500,
  }).data;
  const debate = data?.getDebate || {};

  const [endDebate] = useMutation(END_DEBATE);

  // execute query to Debate details from graphql
  //populage local state with debate details
  console.log("DEBATE DATA", debate);

  const [challengerVotes, countChallengerVotes] = useState(0);
  const [opponentVotes, countOpponentVotes] = useState(0);

  const countVotes = () => {
    console.log("COUNTING VOTES");
    if (debate && debate.arguments) {
      countChallengerVotes(
        debate.arguments
          .filter((arg, index) => index % 2 === 0)
          ?.reduce((acc, arg) => acc + arg.votes.length, 0) || 0
      );
      countOpponentVotes(
        debate.arguments
          .filter((arg, index) => index % 2 === 1)
          ?.reduce((acc, arg) => acc + arg.votes.length, 0) || 0
      );
    } else {
      countChallengerVotes(0);
      countOpponentVotes(0);
    }
  };

  useEffect(() => {
    // loadDebate();
    console.log("DEBATE", debate);
    countVotes();
    handleEndDebate();
  }, [debate]);

  async function handleEndDebate() {
    let winner;
    if (debate.winner) {
      return;
    }
    console.log(
      "CHECKING FOR WINNER",
      debate.winner,
      debate.arguments,
      debate.numOfRounds
    );
    if (debate.arguments.length === 2 * debate.numOfRounds) {
      console.log("END OF DEBATE");
      if (challengerVotes > opponentVotes) {
        winner = debate.createdBy._id;
      } else {
        winner = debate.opponent._id;
      }
      console.log("WINNER", winner);
      const updatedDebate = await endDebate({
        variables: { id: id, winner: winner },
      });
      console.log("handleEndDebate", id, updatedDebate.data.endDebate, winner);
    }
  }

  return (
    <>
      {debate && debate._id ? (
        <>
          <div className="debateHeader">
            <ScoreBoard
              debate={debate}
              challengerVotes={challengerVotes}
              opponentVotes={opponentVotes}
            />
          </div>
          <DebateInputs
            debate={debate}
            id={debate._id}
            handleEndDebate={handleEndDebate}
          />
        </>
      ) : (
        <> </>
      )}
    </>
  );
}
export default DebateRoom;
