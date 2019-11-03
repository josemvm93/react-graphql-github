import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment user on User {
        name
        avatarUrl
        email
        bio
        pullRequests {
            totalCount
        }
    }
`;