// DebateComponent.js
import React, { useState } from 'react';
import DebateService from '../services/DebateService';

function DebateComponent({ debate }) {
  const [newComment, setNewComment] = useState('');
  const [voteValue, setVoteValue] = useState(0);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    await DebateService.addComment(debate._id, newComment);
    // Fetch updated debate data after adding comment
  };

  const handleVoteSubmit = async (event) => {
    event.preventDefault();
    await DebateService.vote(debate._id, voteValue);
    // Fetch updated debate data after voting
  };

  return (
    <div>
      <h2>{debate.debateTitle}</h2>
      <p>{debate.numOfRounds} Rounds</p>
      {/* Display debate arguments, speakers, etc. */}

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="submit">Add Comment</button>
      </form>

      {/* Vote Form */}
      <form onSubmit={handleVoteSubmit}>
        <input 
          type="number" 
          value={voteValue} 
          onChange={(e) => setVoteValue(parseInt(e.target.value))} 
        />
        <button type="submit">Vote</button>
      </form>
    </div>
  );
}

export default DebateComponent;