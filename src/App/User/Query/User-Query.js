import gql from 'graphql-tag'
import { USER_FRAGMENT }from '../Fragment/User-Fragment';

export const QUERY_USER = gql`
    query($userName: String!, $last: Int!, $after: String, $before: String) {
        search(query: $userName, type: USER, last: $last,  before: $before, after: $after) {
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            userCount
            repositoryCount
            edges {
                node {
                ...user
                }
            }
        }
    }
    ${USER_FRAGMENT}
`;