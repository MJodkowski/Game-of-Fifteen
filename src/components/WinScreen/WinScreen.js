import React from 'react';
import classes from './WinScreen.css';

const winScreen = (props) => {
    return (
        <div>
            <p className={classes.winPara}>Congrats, you win!</p>
        </div>
    )
}

export default winScreen;