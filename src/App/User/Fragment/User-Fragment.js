import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment user on User {
        name
        avatarUrl
        login
        location
        email
        bio
        pullRequests {
            totalCount
        }
    }
`;