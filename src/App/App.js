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


function App() {
    const title = 'GitHub Repositories';
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" className="App">
                <h1 className="title">{title}</h1>
                <Typography component="div" className="background">
                    <Router>
                        <Switch>
                            <Route path={routes.HOME}>
                                <Home></Home>
                            </Route>
                            <Route path={routes.USER}>
                                <h2>USER</h2>
                            </Route>
                            <Route path="/">
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
