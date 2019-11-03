import gql from 'graphql-tag';

const USER_FRAGMENT = gql`
    fragment user on User {
        name
        avatarUrl
        email
    }
`;

export USER_FRAGMENT;