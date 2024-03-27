// create a file that is a container that holds a list populated with the user's open challenges.
// these are the debates the user has created but have not had a challenger accept it.
// these will be found in the database by searching for user id and the status of open debates
import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { QUERY_USER } from "../../../utils/queries";
import { Link } from "react-router-dom";

const UserOpenChallenges = () => {
  const [openDebates, setOpenDebates] = useState([]);
  const [ getUser ] = useLazyQuery(QUERY_USER);
  
  const loadOpenDebates = async () => {
    try {
      const { data } = await getUser();
      const user = data?.myProfile || {};
      console.log(user);
      const openDebates =
      // user.debates?.filter(
      //   (debate) => debate.status === "open" && debate.createdBy === user.id
      //   ) || [];
        setOpenDebates(user.debates);
        

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOpenDebates()
    // Filter that only includes open challenges created by the user
  }, []);

  // console.log(openDebates);
  // if (loading) {
   
  // }
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
