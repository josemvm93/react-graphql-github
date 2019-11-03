import React from 'react';
import './Home.css';
import SearchUser from '../User/Search-User/Search-User';

function Home() {
    const title = 'GitHub Repositories';
    return (
        <h1>{title}</h1>,
        <SearchUser></SearchUser>
    );
}

export default Home;