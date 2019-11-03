import React, { useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import TablePagination from '@material-ui/core/TablePagination';
import List from '@material-ui/core/List';
import RepositoryItem from './Repository-Item/Repository-Item';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import * as routes from '../../../constants/routes';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import {QUERY_USER_REPOSITORY} from "../../User/Query/User-Query";
import IconButton from '@material-ui/core/IconButton';
import './Repository-List.css';
import Typography from '@material-ui/core/Typography';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

function RepositoryList() {
    let location = useLocation();
    let history = useHistory();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [repositoriesCount, setRepositoriesCount] = useState(0);
    const [repositories, setRepositories] = useState([]);


    const [after, setAfter] = useState(null);
    const [before, setBefore] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        if (data) {
            if (data['user']['repositories']['pageInfo']['hasNextPage']) {
                setAfter(data['user']['repositories']['pageInfo']['endCursor']);
                setBefore(null);
            } else {
                setBefore(data['user']['repositories']['pageInfo']['startCursor']);
                setAfter(null);
            }
        }
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const { loading, error, data } = useQuery(QUERY_USER_REPOSITORY, {
        variables: {
            userLogin: location['search'].replace('?',''),
            last: rowsPerPage,
            after: after,
            before: before
        }
    });

    const renderRepositories =  () => repositories.map(
        (repository, i) => (
            <RepositoryItem repository={repository} user={data['user']} key={i}/>
        )
    );
    useEffect(
        () => {
            if (location && location['search']) {
                if (data) {
                    setRepositories(data['user']['repositories']['edges'])
                    setRepositoriesCount(data['user']['repositories']['totalCount']);
                }
            }
        },
        [location, data]
    );

    const goHome = (e) => {
      history.goBack(routes.HOME);
    };

    return (
        <div>
            <div className="bar">
                <div className="backContainer">
                    <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={goHome}>
                        <ArrowBackIos />
                        <Typography className="backTitle">
                            Repositories
                        </Typography>
                    </IconButton>
                </div>
                <div className="titleContainer">
                    <Typography variant="h5" className="title">
                        {data && data['user']['name'] ? data['user']['name']: 'NO USER'}
                    </Typography>
                </div>
            </div>
            <div className="resultContainer">
                <div>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            renderRepositories()
                        }
                    </List>
                </div>
                <Table>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                colSpan={3}
                                count={repositoriesCount}
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
        </div>
    );
}

export default RepositoryList;