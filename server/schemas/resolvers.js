const { User, Debate } = require("../models"); // Importing User and Debate models
const { signToken, AuthenticationError } = require("../utils/auth"); // Importing signToken function and AuthenticationError class

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
      //   const user = await User.findById(context.user._id); // Finding user by ID
      // }
return await User.findById(context.user._id).populate('debates'); // Finding user by ID and populating the debates field
      }
      return null; // Returning the user
    },
    getDebate: async (parent, args, context) => {
      if (context.user) {
        throw new AuthenticationError; // Throwing an AuthenticationError if user is not authenticated
        return await Debate.findById(args._id); // Finding a debate by ID
      }
    }, 
    getDebates: async (parent, args, context) => {
      if (context.user) {
        throw new AuthenticationError; // Throwing an AuthenticationError if user is not authenticated
        return await Debate.find({ createdBy: context.user._id }); // Finding all debates created by the user
      }
    }
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args); // Creating a new user
      const token = signToken(user); // Generating a token for the user

      return { token, user }; // Returning the token and user
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true, // Updating the user with new data
        });
      }

      throw new AuthenticationError; // Throwing an AuthenticationError if user is not authenticated
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); // Finding user by email

      if (!user) {
        throw AuthenticationError; // Throwing an AuthenticationError if user is not found
      }

      const correctPw = await user.isCorrectPassword(password); // Checking if the password is correct

      if (!correctPw) {
        throw AuthenticationError; // Throwing an AuthenticationError if password is incorrect
      }

      const token = signToken(user); // Generating a token for the user

      return { token, user }; // Returning the token and user
    },
    createDebate: async (parent, args, context) => {
      console.log("createDebate called!", args); // Logging a message to the console
      if (context.user) {
        const debate = await Debate.create({ title: args.title, createdBy: context.user._id }, { new: true}); // Creating a new debate
        return debate; // Returning the debate
      }

    },

  },
};

module.exports = resolvers; // Exporting the resolvers object
