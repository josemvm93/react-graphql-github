import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import UserList from '../User-List/User-List';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function SearchUser() {
    const classes = useStyles();
    const [userName, setUserName]= useState('');
    const handleChange = event => {
        setUserName(event.target.value);
    };

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item xs={12}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={12}>
                                <TextField fullWidth id="input-user-name" variant="filled" label="GitHub Name" placeholder="Search GitHub..."
                                           InputProps={{
                                               startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                                           }}
                                           value={userName}
                                           onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <UserList valueUserName={userName}></UserList>
            </div>
        </div>
    );
}
export default SearchUser;