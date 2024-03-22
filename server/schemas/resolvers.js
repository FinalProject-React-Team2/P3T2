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
      if (!context.user) {
        throw new AuthenticationError;
       } // Throwing an AuthenticationError if user is not authenticated
        return await Debate.findById(args._id); // Finding a debate by ID
      },

    getDebates: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError; 
      }// Throwing an AuthenticationError if user is not authenticated
        return await Debate.find({ createdBy: context.user._id }); // Finding all debates created by the user
      }
    },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args); // Creating a new user
      const token = signToken(user); // Generating a token for the user

      return { token, user }; // Returning the token and user
    },

    updateUser: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError; // Throwing an AuthenticationError if user is not authenticated
      }
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true, // Updating the user with new data
        });
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email }); // Finding user by email

      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('incorrect credentials'); // Throwing an AuthenticationError if user is not found
      }

      const token = signToken(user); // Generating a token for the user

      return { token, user }; // Returning the token and user
    },
    createDebate: async (parent, args, context) => {
      try{
      console.log("createDebate called!", args); // Logging a message to the console
      console.log(context.user)
      if (context.user) {
        
        const debate = await Debate.create({title: args.title, createdBy: context.user._id}); // Creating a new debate

        console.log("debate created!", debate); // Logging a message to the console
        return debate; // Returning the debate
      } else if (context.user == null) {
        throw new AuthenticationError('You need to be logged in!'); // Throwing an AuthenticationError if user is not authenticated

      }
      } catch (err) {
      console.error(`Error encountered in create debate: ${err}`)
      }
    }
  },
};

module.exports = resolvers; // Exporting the resolvers object
