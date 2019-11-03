import gql from 'graphql-tag'
import { USER_FRAGMENT }from '../Fragment/User-Fragment';
import {REPOSITORY_FRAGMENT} from "../../Repository/Fragment/Repository-Fragment";

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


export const QUERY_USER_REPOSITORY = gql`
    query($userLogin: String!, $after: String, $before: String) {
      user(login: $userLogin) {
        avatarUrl,
        name,
        login,
        location,
        repositories(
            first: 5
            orderBy: { direction: DESC, field: STARGAZERS }
            after: $after,
            before: $before
          ) {
            edges {
              node {
                ...repository
              }
            }
            totalCount
            pageInfo {
              endCursor
              hasNextPage
              startCursor
              hasPreviousPage
            }
          }
      }
    }
    ${REPOSITORY_FRAGMENT}
`;