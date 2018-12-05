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


    if (props.drawer) {
        sidebarClasses = `${classes.SideBar} ${classes.open}`;
    }

    return (
        <Wrapper>
            <Backdrop clickHandler={props.clickHandler} state={props.drawer}/>
            <div className={sidebarClasses} onClick={(e) => e.target.tagName === 'BUTTON' ? props.changeState('drawer', false) : null}>
                <ul className={classes['button-list']}>
                    <li><button className={classes.button} key='b1' onClick={() => props.changeState('game', false)} disabled={disableButton()}>New Game</button></li>
                    <li><button className={classes.button} key='b2' onClick={props.reset} disabled={!props.game}>Reset</button></li>
                    <li><button className={classes.button} key='b3' onClick={() => props.changeState('modal', true)}>How to Play</button></li>
                </ul>
            </div>
        </Wrapper>
    );
}

export default sideBar;