import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query { 
    user {
        _id
        username
        email
        debates {
            _id
            title
            category
            createdAt
            challenger
            status
        }
    }
}  
`;

export const GET_DEBATES = gql`
query {
    getDebates {
        _id
        title
        category
        createdAt
        challenger
        status
    }
}
`;


export const GET_DEBATES_BY_USER_STATUS = gql`
query GetDebatesByUser {
    getDebatesByUser {
        _id
        title
        category
        createdAt
        challenger
        status
    }
}
`;

export const GET_DEBATE = gql`
query GetDebate($_id: ID!) {
    getDebate(_id: $_id) {
        _id
        title
        category
        createdAt
        challenger
        status
        arguments {
            _id
            title
            body
            comments {
                _id
                comment
                user
            }
            votes
        }
    }
}
`;

