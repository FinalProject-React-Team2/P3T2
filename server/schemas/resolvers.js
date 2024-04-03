const { User, Debate } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }, context) => {
      if (context.user) {
        return await User.findById({ _id: userId }).populate("debates");
      }

      throw new Error(`User with ID ${userId} not found`);
    },

    myProfile: async (_, __, context) => {
      // Ensure there is a user in the context
      if (!context.user) {
        throw new Error("You must be logged in.");
      }
      // Use context.user._id to fetch the user profile
      const userProfile = await User.findById(context.user._id)
        .populate("debates")
        .populate({
          path: "debates",
          populate: "createdBy opponent winner",
        });
      return userProfile;
    },

    getUserDebates: async (_, __, context) => {
      try {
        // Assuming context.userId contains the ID of the user making the request
        const userId = context.userId;

        if (!userId) {
          throw new Error("User ID not found in context");
        }

        // Fetch the user and populate the debates
        const user = await User.findById(userId).populate({
          path: "debates",
          select: "title -_id", // Select only the title field, exclude the id
        });

        if (!user) {
          throw new Error("User not found");
        }

        // Return the user with populated debate titles
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching user debates");
      }
    },

    getDebate: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError();
      } // Throwing an AuthenticationError if user is not authenticated
      return await Debate.findById(args._id)
        .populate("createdBy opponent winner")
        .populate("arguments")
        .populate({ path: "arguments", populate: "user" })
        .populate("comments")
        .populate({ path: "comments", populate: "user" });
      // .populate({ path: "arguments", populate: "votes" });
    },

    getDebates: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError();
      // } // Throwing an AuthenticationError if user is not authenticated
      return await Debate.find({})
        .populate("createdBy opponent winner")
        .populate({ path: "arguments", populate: "user" })
        .populate("comments")
        .populate({ path: "comments", populate: "user" }); // Finding all debates created by the user
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    createDebate: async (parent, { debate }, context) => {
      console.log("createDebate called!", debate.title); // Logging a message to the console
      if (context.user) {
        console.log("CREATING DEBATE");
        const debateInit = await Debate.create({
          title: debate.title,
          createdBy: context.user._id,
          numOfRounds: debate.numOfRounds,
          arguments: [],
          comments: [],
          status: "open",
          winner: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }); // Creating a new debate
        console.log("DEBATE CREATED", debateInit); // Logging the debate to the console
        //  title: args.title, createdBy: context.user._id }, { new: true}); // Creating a new debate
        console;
        // return debateInit; // Returning the debate
        const userDebate = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { debates: debateInit._id } },
          { new: true }
        ); // Updating the user's debates

        return debateInit;
      }
      throw new AuthenticationError("You need to be logged in!"); // Throwing an AuthenticationError if user is not authenticated
    },
    addOpponent: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedDebate = await Debate.findByIdAndUpdate(
          _id,
          { opponent: context.user._id, status: "active", updatedAt: new Date()},
          { new: true }
        ).populate("createdBy opponent winner");

        await User.findByIdAndUpdate(
          context.user._id,
          { $push: { debates: _id } },
          { new: true }
        );

        return updatedDebate;
      }
    },

    addArgument: async (parent, { _id, argument }, context) => {
      if (context.user) {
        // create argument object
        newArgument = {
          body: argument,
          user: context.user._id,
          votes: [],
        };
        const updatedDebate = await Debate.findByIdAndUpdate(
          _id,
          { $push: { arguments: newArgument,  }, updatedAt: new Date() },
          { new: true }
        ).populate("createdBy opponent winner");

        return updatedDebate;
      }
    },

    addComment: async (parent, { _id, comment }, context) => {
      if (context.user) {
        const updatedDebate = await Debate.findByIdAndUpdate(
          _id,
          { $push: { comments: { user: context.user._id, comment, updatedAt: new Date() } } },
          { new: true }
        )
          .populate("createdBy opponent winner")
          .populate({ path: "arguments", populate: "user" })
          .populate({ path: "comments", populate: "user" });

        return updatedDebate;
      }
    },

    addVote: async (parent, { _id, argumentId }, context) => {
      if (context.user) {
        const debate = await Debate.findById(_id);
        

        console.log("DEBATE", debate);
        // find the argument by its ID
        //add the vote if that ID is not already in the array and update the updatedAt field
        debate.arguments.id(argumentId).votes.push(context.user._id);
        debate.updatedAt = new Date();
        debate.save();

        // const updatedDebate = await Debate.findByIdAndUpdate(
        //   _id,
        //   {
        //     $push: { arguments: { _id: argumentId, votes: context.user._id } },
        //   },
        //   { new: true }
        // )
        //   .populate("createdBy opponent winner")
        //   .populate("arguments")
        //   .populate({ path: "arguments", populate: "user" })
        //   .populate("comments")
        //   .populate({ path: "comments", populate: "user" });

        return debate;
      }
    },
  },
};

module.exports = resolvers;
