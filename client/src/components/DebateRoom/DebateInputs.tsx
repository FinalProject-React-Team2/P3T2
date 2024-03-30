import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";
import { ADD_ARGUMENT } from "../../utils/mutations";
import { ADD_COMMENT } from "../../utils/mutations";
import { ADD_VOTE } from "../../utils/mutations";
import { GET_DEBATE } from "../../utils/queries";
import AuthService from "../../utils/auth";
import Grid from "@mui/material/Unstable_Grid2";
import "./DebateInputs.css";
import "./DebateInputs.css";

const DebateInputs = ({ debate, id }) => {
  const userId = AuthService.getProfile().data._id;

  const debateId = id;
  console.log(debateId);
  const [currentUserRole, setCurrentUserRole] = useState<
    "creator" | "opponent" | "spectator"
  >("spectator");
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState("");
  console.log(currentUserRole);

  const { data, loading, error } = useQuery(GET_DEBATE, {
    variables: { id: debateId },
    // pollInterval: 5000,
  });

  // Determine the user role (creator, opponent, or spectator)
  useEffect(() => {
    if (data) {
      const { createdBy, opponent } = data.getDebate;
      // Assuming context.user._id is accessible via some form of global state or context

      if (userId === createdBy._id) {
        setCurrentUserRole("creator");
      } else if (userId === opponent._id) {
        setCurrentUserRole("opponent");
      } else {
        setCurrentUserRole("spectator");
      }
    }
  }, [data]);

  // Mutation hooks
  const [addArgument] = useMutation(ADD_ARGUMENT);
  const [addComment] = useMutation(ADD_COMMENT);
  const [addVote] = useMutation(ADD_VOTE);

  // Handler functions (simplified)
  const handleAddArgument = async () => {
    if (!inputValue.trim()) return; // Basic validation

    try {
      const response = await addArgument({
        variables: {
          id: debateId,
          argument: inputValue,
        },
        // Optimistic UI updates or refetch queries could be added here
      });

      if (response.data) {
        // Assuming you have a way to display or refetch the updated list of arguments
        console.log("Argument added successfully:", response.data.addArgument);
        setInputValue(""); // Reset input after successful submission
      }
    } catch (error) {
      console.error("Error adding argument:", error);
    }
  };

  const handleAddComment = async () => {
    if (!comment.trim()) return; // Basic validation

    try {
      const response = await addComment({
        variables: {
          id: debateId,
          comment,
        },
        // Optimistic UI updates or refetch queries could be added here
      });

      if (response.data) {
        // Assuming you have a way to display or refetch the updated list of comments
        console.log("Comment added successfully:", response.data.addComment);
        setComment(""); // Reset comment input after successful submission
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleAddVote = async (event, argumentId) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      console.log(argumentId);

      const response = await addVote({
        variables: {
          id,
          argumentId,
        },
        // Optimistic UI updates or refetch queries could be added here
      });

      if (response.data) {
        // Handle the UI update or indicate success as needed
        console.log("Vote added successfully:", response.data.addVote);
        // Optionally, trigger UI update or show feedback
      }
    } catch (error) {
      console.error("Error adding vote:", error);
      // Optionally, handle error state in the UI
    }
  };

  const renderArguments = () => {
    // Check if data is loaded and has arguments
    if (loading) return <p>Loading arguments...</p>;
    if (error) return <p>Error loading arguments!</p>;
    if (!data || !data.getDebate.arguments.length)
      return <p>No arguments have been made yet.</p>;

    return (
      <div className="scroll">
        {data.getDebate.arguments.map((argument, index) => (
          <div
            key={index}
            style={
              argument.user._id === debate.createdBy._id
                ? { marginBottom: "1rem", textAlign: "left", direction: "rtl" }
                : { textAlign: "right" }
            }
          >
            <div style={{ fontWeight: "bold" }}>
              Argument {index + 1}
              <strong> {argument.user.firstName}:</strong>
            </div>

            <p style={{ display: "inline", fontSize: "20px" }}>
              {" "}
              {argument?.body}
            </p>
            {/*  */}
            {/* Add Vote Button - Conditionally shown */}
            {currentUserRole === "spectator" && (
              <a onClick={(event) => handleAddVote(event, argument._id)}>
                <img
                  title="Click to vote"
                  className="voteIcon"
                  src="/voteIcon.png"
                  alt="gavel icon"
                  style={{ objectFit: "contain", height: "40px" }}
                />
              </a>
            )}
            <span> {argument.votes.length} votes </span>
          </div>
        ))}
      </div>
    );
  };

  const containerStyle = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: "1rem",
    // maxHeight: "50vw",
    // display: "grid",
  };

  const gridStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "center",
    padding: "1rem",
  };

  const inputStyle = {
    // marginRight: "20rem",
    // width: "100%",
  };

  // Conditional rendering based on user role
  const renderInputForm = () => {
    if (currentUserRole === "spectator") return null;

    return (
      <>
 
        <div className="form-floating input-group mb-3 debateFormInput">
          {/* Input form for adding an argument */}
          <input
            className="form-control"
            id="argumentInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder=""
            style={inputStyle}
            aria-describedby="button-addon2"
          />
          <button
            type="button"
            id="button-addon2"
            className="btn btn-outline-secondary"
            onClick={handleAddArgument}
          >
            Submit Argument
          </button>
          <label htmlFor="argumentInput">
            &nbsp;&nbsp; Enter Arguments Here...
          </label>
        </div>
      </>
    );
  };

  const renderComments = () => {
    // Assuming 'comments' is part of the data returned from the GET_DEBATE query and structured appropriately
    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments!</p>;
    if (!data || !data.getDebate.comments.length)
      return (
        <div className="commentsContainer">
          <p>No comments yet.</p>
        </div>
      );

    return (
      <div className="commentsContainer scroll">
        {data.getDebate.comments.map((comment) => (
          <div
            key={comment._id}
            style={{
              marginBottom: "1rem",
              marginLeft: "3rem",
              textAlign: "right",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: "5rem",
            }}
          >
            <span style={{ fontWeight: "bold", display: "inline" }}>
              {comment.user.firstName}...
            </span>
            <p style={{ display: "inline", fontSize: "16px" }}>
              &nbsp;&nbsp;{comment.comment}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Grid container className="grid-container" spacing={1} style={gridStyle}>
        <Grid
          item
          className="grid-item"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          key={1}
          style={gridStyle}
        >
          <div className="container debateInputs">
            <h3>Debate Arguments:</h3>
            {renderArguments()}
          </div>
          <div className="form-floating input-group mb-3" style={{}}>{renderInputForm()}</div>
        </Grid>

        <Grid
          item
          className="grid-item"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          key={2}
          style={gridStyle}
        >
          
            <div className=" debateInputs container">
              <h3>Spectator Comments:</h3>
              {renderComments()}
            </div>
            {currentUserRole === "spectator" && (
              <div className="form-floating input-group mb-3 debateFormInput">
                <input
                  className="form-control"
                  id="commentInput"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder=""
                  aria-describedby="button-addon3"
                />
                <button
                  type="button"
                  id="button-addon3"
                  className="btn btn-outline-secondary"
                  onClick={handleAddComment}
                >
                  Submit Comment
                </button>
                <label htmlFor="commentInput">
                  &nbsp;&nbsp; Enter Comments Here...
                </label>
              </div>
            )}
          
        </Grid>
      </Grid>
    </>
  );
};

export default DebateInputs;