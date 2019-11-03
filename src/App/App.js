import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home/Home';
import {CssBaseline, Container, Typography} from '@material-ui/core';
import RepositoryList from './Repository/Repository-List/Repository-List';

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" className="App">
                <Typography component="div" className="background">
                    <Router>
                        <Switch>
                            <Route path={routes.REPOSITORIES}>
                                <RepositoryList></RepositoryList>
                            </Route>
                            <Route path={routes.HOME}>
                                <Home></Home>
                            </Route>
                        </Switch>
                    </Router>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default App;
