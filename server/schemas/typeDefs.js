const typeDefs = `
  scalar DateTime
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    debates: [Debate]
   
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
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Argument {
    _id: ID
    user: User
    body: String
    votes: [ID!]!
  }

  type Comment {
    _id: ID
    user: User
    comment: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    myProfile: User
    getUserDebates: [User]
    getDebate(_id: ID!): Debate
    getDebates: [Debate]
  }

  input DebateInput {
    title: String!
    numOfRounds: Int!
  } 


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    createDebate(debate: DebateInput!): Debate
    addOpponent(_id: ID!): Debate
    addArgument(_id: ID!, argument: String!): Debate
    addComment(_id: ID!, comment: String!): Debate
    addVote(_id: ID!, argumentId: ID!): Debate
    endDebate(_id: ID!, winner: ID!): Debate
  }
`;

module.exports = typeDefs;
