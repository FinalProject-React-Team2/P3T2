import "bootstrap/dist/css/bootstrap.min.css";


const scoreHeadersStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "black",
};



export default function ScoreBoard({ debate, challengerVotes, opponentVotes }) {



  return (
    <>
    <div className="container">
    <h1>{debate.title}</h1>
    <div className="row">
        <div className="col">
         {debate.status === "closed" && challengerVotes > opponentVotes ? <h2>🏆</h2> : ""}
        </div>
        <div className="col">
  
        </div>
        <div className="col">
        {debate.status === "closed" && challengerVotes < opponentVotes ? <h2>🏆</h2> : ""}
        </div>
      </div>
      <div className="row" style={scoreHeadersStyle}>
        <div className="col">Challenger:</div>
        <div className="col">
          <h2>vs</h2>
        </div>
        <div className="col">Opponent:</div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "orange" }}>
            {debate?.createdBy?.firstName || "error"}
          </p>
        </div>
        <div className="col"></div>
        <div className="col">
          <p style={{ color: "blue" }}>
            {debate?.opponent?.firstName || "waiting for opponent..."}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "orange" }}>
            {challengerVotes|| "0"}
          </p>
        </div>
        <div className="col"><h3>👍</h3></div>
        <div className="col">
          <p style={{ color: "blue" }}>
            {opponentVotes || "0"}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
