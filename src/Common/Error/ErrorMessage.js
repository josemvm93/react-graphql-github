import React,{useState, useRef, useEffect} from 'react';
import './ErrorsMessage.css';


function ErrorMessage({error}) {

    return (
        <div className="ErrorMessage">
            <small>
                {error && error['message']}
            </small>
        </div>
    );
};

export default ErrorMessage;