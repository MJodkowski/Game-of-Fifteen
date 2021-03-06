import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.state ? 
        <div onClick={props.clickHandler} className={classes.Backdrop}>
            {props.children}
        </div>
        : null
)

export default backdrop;

//