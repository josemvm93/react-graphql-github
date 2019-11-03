import React, { useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_USER} from '../Query/User-Query';
import TablePagination from '@material-ui/core/TablePagination';
import List from '@material-ui/core/List';
import UserItem from './User-Item/User-Item';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import Loading from '../../../Common/Loading/Loading';
import ErrorMessage from '../../../Common/Error/ErrorMessage';
import './User-List.css';

function UserList({valueUserName}) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [usersCount, setUsersCount] = useState(0);
    const [users, setUsers] = useState([]);

    const [after, setAfter] = useState(null);
    const [before, setBefore] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        if (data) {
            if (data['search']['pageInfo']['hasNextPage']) {
                setAfter(data['search']['pageInfo']['endCursor']);
                setBefore(null);
            } else {
                setBefore(data['search']['pageInfo']['startCursor']);
                setAfter(null);
            }
        }
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const { loading, error, data } = useQuery(QUERY_USER, {
        variables: {
            userName: valueUserName,
            last: rowsPerPage,
            after: after,
            before: before
        }
    });
    useEffect(() => {
        if (data) {
            setUsers(data['search']['edges']);
            setUsersCount(data['search']['userCount']);
        }
    }, [data]);

    const renderUsers =  () => users.map(
        (user, i) => (
            <UserItem user={user} key={i}/>
        )
    );

    return (
        <div>
            <div className="resultContainer">
                {loading && <Loading/>}
                {error && <ErrorMessage error={error}/>}
                {usersCount === 0 && <span class="noResults">No results found</span>}
                <List component="nav" aria-label="main mailbox folders">
                    {
                        renderUsers()
                    }
                </List>
            </div>
            <Table>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            colSpan={3}
                            count={usersCount}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
export default UserList;