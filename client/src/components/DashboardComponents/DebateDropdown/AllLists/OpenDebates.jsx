import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DEBATES } from "../../../../utils/queries";
import { Link } from "react-router-dom";
import AuthService from "../../../../utils/auth";

const OpenDebates = ({ addOpponentHandler }) => {
  const { loading, data } = useQuery(GET_DEBATES);
  const debates =
    data?.getDebates.filter(
      (debate) =>
        debate.status === "open" &&
        debate.createdBy._id != AuthService.getProfile().data._id
    ) || [];
  console.log("OPEN DEBATES", debates, AuthService.getProfile().data._id);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Open Debates</h2>
      <div>
        {debates.map((debate) => (
          <div key={debate._id}>
            <a onClick={() => addOpponentHandler(debate._id)}>
              <h3>{debate.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenDebates;
