//create a file ssimilar to user open challenges that is a container that populates with a list of the users active challenges. this will scan the db for all debates wit this id and the status of active

import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../../utils/queries";
import { Link } from "react-router-dom";
import './UserActiveChallenges.css';

const UserActiveChallenges = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const user = data?.user || {};
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    //filter that only includes open challenges //
    const activeDebates = user.debates?.filter(debate => debate.status === 'active') || [];
    return (
        <div>
        <h2>Your Active Challenges</h2>
        <div>
            {user.debates?.map((debate) => (
            <div key={debate._id}>
                <Link to={`/debate/${debate._id}`}>
                <h3>{debate.title}</h3>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
    }

export default UserActiveChallenges;