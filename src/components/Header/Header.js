import React from 'react';
import classes from './Header.css';

const header = () => {
    return (
        <header className={classes.Header}>
            <h1 className={classes.heading}>Game of Fifteen</h1>
        </header>
    );
}

export default header;