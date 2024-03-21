//create the logic for the open debates drop down

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DEBATES } from "../../../../utils/queries";
import { Link } from "react-router-dom";

const OpenDebates = () => {
    const { loading, data } = useQuery(GET_DEBATES);
    const debates = data?.getDebates || [];
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
        <h2>Open Debates</h2>
        <div>
            {debates.map((debate) => (
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

export default OpenDebates;



