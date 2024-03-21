// DebateDropdown.js
import { useState } from "react";
import ActiveDebates from "./AllLists/ActiveDebates.jsx"
import OpenDebates from "./AllLists/OpenDebates.jsx"
import DebateTopics from "./AllLists/DebateTopics.jsx"
import { Link } from "react-router-dom";



 
function DebateDropdown() {
  const [selectedDebate, setSelectedDebate] = useState("");

  const handleDebateSelect = (debateId) => {
    setSelectedDebate(debateId);
  };
  return (
    <div>
      <h3>Debates:</h3>
      <div className="debates-container">
        <ActiveDebates onSelect={handleDebateSelect} />
        <OpenDebates onSelect={handleDebateSelect} />
        <DebateTopics onSelect={handleDebateSelect} />
      </div>
      {selectedDebate && (
        <Link to={`/debates/${selectedDebate}`}>
          <button>View Details</button>
        </Link>
      )}
      <div>
        <Link to="/CreateDebate">
          <button>Open Challenge</button>
        </Link>
      </div>
    </div>
  );
}

export default DebateDropdown;