import React, { useState, useEffect} from 'react';
/*import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';*/
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import '../'

const QUERY_USER = gql`
    query($userName: String!, $last: Int!) {
        search(query: $userName, type: USER, last: $last) {
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



function SearchUser() {
    /*const [userName, setUserName]= useState('');
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;*/
    /*const rganizationName = 'josemvm93';*/
    const { loading, error, data } = useQuery(QUERY_USER, {
        variables: {
            userName: 'maria',
            last: 10
        }
    });

    if (loading) return 'Loading...';
    if (error) return 'Something Bad Happened';

    return (
        <h1>hola</h1>
    );
}
export default SearchUser;