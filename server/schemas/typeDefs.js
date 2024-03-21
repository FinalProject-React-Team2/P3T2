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
    debateTitle: String
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
    user: {
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
    getDebates: [Debate]
  }

  input DebateInput {
    title: String!
  } 


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
    updateUser(firstName: String, lastName: String, email: String, password: String): User
     
    login(email: String!, password: String!): Auth

    createDebate(Debate: DebateInput!): Debate
  }

 
`;

module.exports = typeDefs;
