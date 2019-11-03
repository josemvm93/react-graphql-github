import React from 'react';
import './Home.css';
import SearchUser from '../User/Search-User/Search-User';

function Home() {
    const title = 'GitHub Repositories';
    return (
        <div>
            <h1 className="title">{title}</h1>
            <SearchUser></SearchUser>
        </div>

    );
}

export default Home;