import React from 'react';
import classes from './Header.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <h1>Game of Fifteen</h1>
        </div>
    );
}

export default header;