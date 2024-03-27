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

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

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
        debates {
          _id
          title
          status
          numOfRounds
        }
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
        user
        body
        votes
      }
      comments {
        user
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
        body
        votes
        user
        _id
      }
      _id
      status
      numOfRounds
      createdBy {
        _id
        firstName
        lastName
        email
        debates {
          _id
          title
          status
          numOfRounds
          arguments {
            body
            votes
          }
        }
      }
      opponent {
        _id
        firstName
        lastName
        email
      }
      comments {
        user
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
  mutation addComment($argumentId: ID!, $comment: String!) {
    addComment(argumentId: $argumentId, comment: $comment) {
      comment
    }
  }
`;

export const VOTE = gql`
  mutation vote($argumentId: ID!) {
    vote(argumentId: $argumentId) {
      votes
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
  VOTE,
  UPDATE_USER,
};
