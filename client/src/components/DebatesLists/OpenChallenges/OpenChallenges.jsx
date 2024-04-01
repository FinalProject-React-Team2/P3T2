
// import React from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../../utils/queries";
// import { Link } from "react-router-dom";

// const UserOpenChallenges = () => {
//   const { loading, data } = useQuery(QUERY_USER);
//   const user = data?.user || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   //filter that only includes open challenges //
//   const openDebates = user.debates?.filter(debate => debate.status === 'open') || [];
//   return (
//     <div>
//       <h2>Your Open Challenges</h2>
//       <div>
//         {user.debates?.map((debate) => (
//           <div key={debate._id}>
//             <Link to={`/debate/${debate._id}`}>
//               <h3>{debate.title}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

// };

// export default OpenChallenges;