import gql from 'graphql-tag'
import { REPOSITORY_FRAGMENT }from '../Fragment/Repository-Fragment';

export const QUERY_REPOSITORY = gql`
    query($userLogin:String!, $last: Int!, $after: String, $before: String) {
      search(query: $userLogin, type: REPOSITORY, last: $last, after: $after, before: $before) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        repositoryCount
        edges {
            node {
            ...repository
          }
        }
      }
    }
    ${REPOSITORY_FRAGMENT}
`;