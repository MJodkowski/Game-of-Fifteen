import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../AuxComponent/Wrapper';


const modal = (props) => (
    <Aux>  
        <Backdrop clickHandler={props.clickHandler} state={props.display} />
        <div style={
            {visibility: props.display ? 'true' : 'false',
            opacity: props.display ? '1' : '0', 
            transform: props.display ? 'translateX(0)' : 'translateX(-100vh)'}} 
            className={classes.Modal} >
            <button className={classes.button}>X</button>
            <p>Modal!</p>
        </div>
    </Aux>
);

export default modal;

// {/* 
//  */}