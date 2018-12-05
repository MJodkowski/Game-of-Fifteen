import React from 'react';
import classes from './ChooseSize.css';

const MAX_SIZE = 8;

const chooseSize = (props) => {
    return (
        <div className={classes.ChooseSize}>
            <h2 className={classes.subheader}>Choose board size</h2>
            <button className={`${classes.upButton} ${classes.sizeButton}`} onClick={() => props.changeState('size', props.size < MAX_SIZE ? props.size + 1 : props.size)}></button>
            <input className={classes.input} readOnly type="number" value={props.size}></input>
            <button className={`${classes.downButton} ${classes.sizeButton}`} onClick={() => props.changeState('size', props.size > 3 ? props.size - 1 : props.size)}></button>
            <button className={classes.playButton} onClick={() => props.changeState('game', true)}>Go!</button>
        </div>
    );
}

export default chooseSize;