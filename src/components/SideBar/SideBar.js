import React from 'react';
import classes from './SideBar.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../AuxComponent/Wrapper.js'

const sideBar = (props) => {
    
    const disableButton = () => {
        if (props.won && !props.game) {
            return false;
        } else if (!props.game) {
            return true;
        } else {
            return false;
        }
    }
    let sidebarClasses = classes.SideBar;

    if (window.innerWidth <= 499) {
        sidebarClasses = classes.closed;
    }
    if (props.drawer) {
        sidebarClasses = classes.open;
    }

    return (
        <Wrapper>
            <Backdrop clickHandler={props.clickHandler} state={props.drawer}/>
            <div className={sidebarClasses}>
                <button key='b1' onClick={() => props.changeState('game', false)} disabled={disableButton()}>New Game</button>
                <button key='b2' onClick={props.reset} disabled={!props.game}>Reset</button> 
                <button key='b3' onClick={() => props.changeState('modal', true)}>How to Play</button>
            </div>
        </Wrapper>
    );
}

export default sideBar;