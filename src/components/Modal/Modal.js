import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../AuxComponent/Wrapper';


const modal = (props) => (
        <Aux>  
        <Backdrop clickHandler={props.clickHandler} state={props.display} />
        <div 
            className={props.display ? classes.Modal : `${classes.Modal} ${classes.invisible}`} >
            <button onClick={() => props.clickHandler()} className={classes.button}>X</button>
            <h2 className={classes.subheader}>How to Play</h2>
            <p>The goal of the game is to rearrange the tiles in reverse order (the empty slot has to remain in the bottom-right corner of the board). 
            Clicking a tile will slide it into the empty slot. Only tiles adjacent to the empty slot may be moved.</p>
            <p>If you wish to start over, click the 'Reset' button.</p>
            <p>If you wish to start over on a different-sized board, click the 'New Game' button.</p>
            <br />
            <p>Have fun!</p>
        </div>
        </Aux>
);

export default modal;