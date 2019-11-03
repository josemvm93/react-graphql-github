import gql from 'graphql-tag';

export const REPOSITORY_FRAGMENT = gql`
   fragment repository on Repository {
      name
      commitComments(last: 100){
        totalCount
      }
    }
`;