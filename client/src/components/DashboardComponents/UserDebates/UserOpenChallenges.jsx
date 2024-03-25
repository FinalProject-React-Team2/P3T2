// create a file that is a container tthat holds a list populated with the user's open challenges.
// these are the debates the user has created but have not had a challenger accept it. 
// these will be found in the database by searching for user id and the status of open debates
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DEBATES_BY_USER_STATUS } from "../../../utils/queries";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { authService } from "../../../utils/auth.js";




const UserOpenChallenges = () => {
 const userId = localStorage.getItem('userId');
  const { loading, data, error } = useQuery(GET_DEBATES_BY_USER_STATUS, {
    variables: { userId, status: 'open' },
  });

  // const [selectedDebate, setSelectedDebate] = useState('');

  if (loading) 
    return <div>Loading...</div>;
    if (error) return <div>Error</div>;


  

  //filter that only includes open challenges //
  const openDebates = data?.getDebatesByUserStatus || [];
  const handleSelectChange = (event) => {
    setSelectedDebate(event.target.value);
  
  };


  return (
    <div>
      <h2>Your Open Challenges</h2>
      {openDebates.length > 0 ? (
        <select value={selectedDebate} onChange={handleSelectChange}>
          <option value=''>Select a debate</option>
        {openDebates.map((debate) => (
          <option key={debate._id} value={debate._id}>{debate.title}</option>
        ))}
      </select>
      ) : (
        <p>You have no open challenges</p>
      )}
      
    </div>
  );
};

export default UserOpenChallenges;