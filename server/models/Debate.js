const { Schema, model } = require("mongoose");

// Import the necessary modules from the mongoose library

const argumentSchema = new Schema(
  {
    // Define the schema for an argument
    body: {
      type: String,
      required: true,
      trim: true,
    },
    // The statement of the argument
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // Reference to the user who made the argument
    votes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    // An array of votes for the argument
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const commentSchema = new Schema({
  // Define the schema for a comment
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // The user who made the comment
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  // The content of the comment
});

const debateSchema = new Schema(
  {
    // Define the schema for a debate
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // The title of the debate
    status: {
      type: String,
      required: true,
      default: "open",
    },
    // The status of the debate (open, closed, or active)
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // Reference to the user who created the debate
    opponent: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // Reference to the opponent user in the debate
    numOfRounds: {
      type: Number,
      required: true,
      default: 3,
    },
    // The number of rounds in the debate
    arguments: [argumentSchema],
    // An array of arguments in the debate
    comments: [commentSchema],
    // An array of comments in the debate
    winner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // Reference to the user who won the debate
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Debate = model("Debate", debateSchema);

// Create a model named "Debate" using the debateSchema

module.exports = Debate;

// Export the Debate model

//possible votes schema
//votes: [{ type: Schema.Types.ObjectId, ref: 'User'}]
