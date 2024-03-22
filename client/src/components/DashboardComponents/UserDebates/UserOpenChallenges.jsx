// create a file that is a container that holds a list populated with the user's open challenges.
// these are the debates the user has created but have not had a challenger accept it. 
// these will be found in the database by searching for user id and the status of open debates
import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../../utils/queries";
import { Link } from "react-router-dom";

const UserOpenChallenges = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter that only includes open challenges created by the user
  const openDebates = user.debates?.filter(debate => debate.status === 'open' && debate.createdBy === user.id) || [];

  return (
    <div>
      <h2>Your Open Challenges</h2>
      <div>
        {openDebates.map((debate) => (
          <div key={debate._id}>
            <Link to={`/debate/${debate._id}`}>
              <h3>{debate.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOpenChallenges;