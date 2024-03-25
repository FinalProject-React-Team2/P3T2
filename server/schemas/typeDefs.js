const typeDefs = `

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
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
      type: String
    comment: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    getDebate(_id: ID!): Debate
    getDebatesByUser: [Debate]
    getDebatesByUserStatus(status: String!): [Debate]
    getDebates: [Debate]
  }

  input DebateInput {
    title: String!
  } 


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
    updateUser(firstName: String, lastName: String, email: String, password: String): User
     
    login(email: String!, password: String!): Auth

    createDebate(title: String!): Debate
  }
`;

module.exports = typeDefs;
