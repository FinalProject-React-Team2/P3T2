// DebateDropdown.js
import { useState } from "react";
// import OpenDebates from "./AllLists/OpenDebates";
import ActiveDebates from "./AllLists/ActiveDebates.jsx"
// import ClosedDebates from "./AllLists/ClosedDebateList";
import { Link } from "react-router-dom";
import CreateDebate from "../../CreateDebate/createDebate.jsx";





function DebateDropdown() {
  const [selectedDebate, setSelectedDebate] = useState("");

  const handleDebateSelect = (debateId) => {
    setSelectedDebate(debateId);
  };

  return (
    <div>
      <h3>Debates:</h3>
      <OpenDebates onSelect={handleDebateSelect} />
      <ActiveDebates onSelect={handleDebateSelect} />
      <ClosedDebates onSelect={handleDebateSelect} />
      {selectedDebate && (
        <Link to={`/debates/${selectedDebate}`}>
          <button>View Details</button>
        </Link>
      )}
      <CreateDebate /> {CreateDebate}
    </div>
  );
}

export default DebateDropdown;
