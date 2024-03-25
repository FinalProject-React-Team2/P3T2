const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
<<<<<<< HEAD
    debates: [Debate]
   
=======
    openDebates: [Debate]
    activeDebates: [Debate]
    closedDebates: [Debate]
>>>>>>> aff4ff3 (safety commit)
  }
  type Debate {
    _id: ID
    title: String
    status: String
    createdBy: User
    opponent: User
    numOfRounds: Int
    arguments: [Argument]
    comments: [Comment]
    winner: User
  }

  type Argument {
    title: String
    body: String
    comments: [Comment]
    votes: [String]
  }

  type Comment {
    user: String
<<<<<<< HEAD
<<<<<<< HEAD
=======
      type: String
>>>>>>> 1de947d (Keep calm and carry on boys)
=======
      type: String
=======
>>>>>>> 10b6de8 (fixed all backend wiring, updated User model,  added getUserDebates query, fixed createDebate resolver path.)
>>>>>>> aff4ff3 (safety commit)
    comment: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
<<<<<<< HEAD
    myProfile: User
=======
>>>>>>> aff4ff3 (safety commit)
    getUserDebates: [User]
    getDebate(_id: ID!): Debate
    getDebates: [Debate]
  }

  input DebateInput {
    title: String!
    createdBy: ID!
  } 

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
<<<<<<< HEAD
    createDebate(debate: DebateInput!): Debate
=======
<<<<<<< HEAD

    createDebate(title: String!): Debate
=======
    createDebate(debate: DebateInput!): Debate
>>>>>>> 10b6de8 (fixed all backend wiring, updated User model,  added getUserDebates query, fixed createDebate resolver path.)
>>>>>>> aff4ff3 (safety commit)
  }
`;

module.exports = typeDefs;
