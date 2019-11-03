import React from 'react';
import './Loading.css';
import CircularProgress from '@material-ui/core/CircularProgress';
function Loading() {

    return (
        <div className="loadingContainer">
            <span>Loading...</span>
            <CircularProgress size={50} className="circularProgress" />
        </div>
    );
}

export default Loading;