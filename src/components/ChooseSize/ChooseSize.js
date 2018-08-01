import React from 'react';
import classes from './ChooseSize.css';

const MAX_SIZE = 8;

const chooseSize = (props) => {
    return (
        <div className={classes.ChooseSize}>
            <button onClick={() => props.changeState('size', props.size < MAX_SIZE ? props.size + 1 : props.size)}>Up</button>
            <button onClick={() => props.changeState('game', true)}>Play</button>
            <button onClick={() => props.changeState('size', props.size > 3 ? props.size - 1 : props.size)}>Down</button>
            <p>{props.size}</p>
        </div>
    );
}

export default chooseSize;