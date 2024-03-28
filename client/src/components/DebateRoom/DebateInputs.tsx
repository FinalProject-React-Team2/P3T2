import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";
import { ADD_ARGUMENT } from "../../utils/mutations";
import { ADD_COMMENT } from "../../utils/mutations";
import { ADD_VOTE } from "../../utils/mutations";
import { GET_DEBATE } from "../../utils/queries";
import AuthService from "../../utils/auth";
import Grid from "@mui/material/Unstable_Grid2";

const DebateInputs = ({ debate, id }) => {
  const userId = AuthService.getProfile().data._id;
  console.log(typeof userId, userId);
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
    pollInterval: 2500
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

  const handleAddVote = async (argumentId: string) => {
    try {
      const userId = AuthService.getProfile().data._id;

      const response = await addVote({
        variables: {
          id: userId,
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
      <div>
        {data.getDebate.arguments.map((argument, index) => (
          <div key={argument.id} style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: "bold" }}>Argument {index + 1}</div>
            <p>{argument.body}</p>
            <div>By: {argument?.user.firstName}</div>
            {/* Optionally, render vote count or a button to vote if the current user is allowed to */}
            {/* Example for displaying vote count (assuming votes is an array of user IDs) */}
            <div>Votes: {argument.votes.length}</div>
            {/* Add Vote Button - Conditionally shown */}
            {currentUserRole === "spectator" && (
              <button onClick={() => handleAddVote(argument.id)}>Vote</button>
            )}
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
  };

  const gridStyle = {
    display: "flex",
    alignItems: "center",
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
        <h3>
          {/* Welcome the debater by name */}
          Welcome, {currentUserRole === "creator" ? "Callenger" : "Opponent"}!
        </h3>
        <div className="form-floating input-group mb-3">
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
      <div className="commentsContainer">
        {data.getDebate.comments.map((comment) => (
          <div key={comment._id} style={{ marginBottom: "0.5rem" }}>
            <p style={{ fontWeight: "bold" }}>{comment.user.firstName}:</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Grid container spacing={12} style={gridStyle}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} key={6}>
        <div className="container" style={containerStyle}>
          {renderInputForm()}
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} key={7}>
        <div className="container" style={containerStyle}>
          <h2>Debate Arguments</h2>
          {renderArguments()}
        </div>
      </Grid>
      {/* Comment box for spectators */}
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} key={8}>
        <div className="container">
          <h3>Comments</h3>

          {renderComments()}
        </div>
        {/* The rest of your component */}
      </Grid>
      {currentUserRole === "spectator" && (
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} key={9}>
          <div className="container">
            <div className="form-floating input-group mb-3">
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
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default DebateInputs;
