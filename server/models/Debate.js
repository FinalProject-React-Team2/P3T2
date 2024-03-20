const { Schema, model } = require("mongoose");


const argumentSchema = new Schema(
  {
    // Use the mongoose.Schema constructor
    // Reference to the user who made the argument
    // Type of argument opener, rebuttal, closer
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // The statement of the argument
    body: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    votes: [String],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const commentSchema = new Schema({
  // Use the mongoose.Schema constructor
  user: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
});

const debateSchema = new Schema( // Use the mongoose.Schema constructor
  {
    debateTitle: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      // open, closed, or active?
      default: "open",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    opponent: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    numOfRounds: {
      type: Number,
      required: true,
      default: 3,
    },
    argument: [argumentSchema],
    comments: [commentSchema],
    winner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Debate = model("Debate", debateSchema);

module.exports = Debate;
