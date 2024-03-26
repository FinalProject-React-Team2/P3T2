import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query MyProfile {
    myProfile {
      debates {
        _id
        createdBy {
          _id
          firstName
        }
        numOfRounds
        opponent {
          _id
          firstName
        }
        title
        status
        winner {
          _id
          firstName
        }
      }
    }
  }
`;

export const GET_DEBATES = gql`
  query getDebates {
    getDebates {
      title
      createdBy {
        _id
        firstName
      }
      opponent {
        _id
        firstName
      }
      status
      numOfRounds
      winner {
        _id
        firstName
        lastName
      }
      _id
    }
  }
`;

export const GET_DEBATE = gql`
  query getDebate($id: ID!) {
    getDebate(_id: $id) {
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
        title
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
