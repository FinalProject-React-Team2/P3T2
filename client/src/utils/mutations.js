import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_OPPONENT = gql`
  mutation Mutation($id: ID!) {
    addOpponent(_id: $id) {
      _id
      title
      status
      createdBy {
        _id
        firstName
        lastName
        email
      }
      opponent {
        _id
        firstName
        lastName
        email
      }
      numOfRounds
      arguments {
        _id
        user{
          _id
          firstName
          lastName
          email
        }
        body
        votes
      }
      comments {
        _id
        user{
          _id
          firstName
          lastName
          email
        }
        comment
      }
      winner {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const CREATE_DEBATE = gql`
  mutation createDebate($debate: DebateInput!) {
    createDebate(debate: $debate) {
      createdBy {
        _id
        firstName
      }
      numOfRounds
      opponent {
        _id
        firstName
      }
      status
      title
    }
  }
`;

export const ADD_ARGUMENT = gql`
  mutation addArgument($id: ID!, $argument: String!) {
    addArgument(_id: $id, argument: $argument) {
      arguments {
        _id
        body
        user{
          _id
          firstName
          lastName
          email
        }
        votes 
      }
      _id
      status
      numOfRounds
      createdBy {
        _id
        firstName
        lastName
        email
      }
      opponent {
        _id
        firstName
        lastName
        email
      }
      comments {
        user{
          _id
          firstName
          lastName
          email
        }
        comment
      }
      winner {
        _id
        firstName
        lastName
        email
      }
      title
    }
  }
`;

export const ADD_COMMENT = gql`
 mutation addComment($id: ID!, $comment: String!) {
  addComment(_id: $id, comment: $comment) {
    _id
    title
    status
    createdBy {
      _id
      firstName
      lastName
      email
   
    }
    opponent {
      _id
      firstName
      lastName
      email
    }
    numOfRounds
    arguments {
      _id
      user{
        _id
        firstName
        lastName
        email
      }
      body
      votes
    }
    comments {
      _id
      user{
        _id
        firstName
        lastName
        email
      }
      comment
    }
    winner {
      _id
      firstName
      lastName
      email
    }
  }
}
`;

export const ADD_VOTE = gql`
mutation addVote($id: ID!, $argumentId: ID!) {
  addVote(_id: $id, argumentId: $argumentId) {
    _id
    title
    status
    createdBy {
      _id
      firstName
      lastName
      email
    }
    opponent {
      _id
      firstName
      lastName
      email
    }
    numOfRounds
    arguments {
      _id
      user{
        _id
        firstName
        lastName
        email
      } 
      body
      votes
    }
    comments {
      user{
        _id
        firstName
        lastName
        email
      }
      comment
    }
    winner {
      _id
      firstName
      lastName
      email
    }
  }
}
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String # $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email # password: $password
    ) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export default {
  LOGIN,
  ADD_USER,
  CREATE_DEBATE,
  ADD_ARGUMENT,
  ADD_COMMENT,
  ADD_VOTE,
  UPDATE_USER,
};
