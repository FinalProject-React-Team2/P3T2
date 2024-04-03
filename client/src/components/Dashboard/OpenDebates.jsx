import { useQuery } from "@apollo/client";
import { GET_DEBATES } from "../../utils/queries";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

const OpenDebates = ({ addOpponentHandler }) => {
  const { loading, data } = useQuery(GET_DEBATES);
  const openDebates =
    data?.getDebates.filter(
      (debate) =>
        debate.status === "open" &&
        debate.createdBy?._id != AuthService.getProfile().data._id
    ) || [];
  console.log("OPEN DEBATES", openDebates, AuthService.getProfile().data._id);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2></h2>
      <div>
        <ol>
          {openDebates.map((debate) => (
            <li key={debate._id}>
              <Link onClick={() => addOpponentHandler(debate._id)}>
                <h3>
                  🗣️
                  {`${debate?.createdBy.firstName} vs. TBD ${
                    debate.title
                  } is (${debate.status.toUpperCase()}) `}
                </h3>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default OpenDebates;
