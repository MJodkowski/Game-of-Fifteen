import React from 'react';

const winScreen = (props) => {
    return (
        <div>
            <p>Congrats, you win!</p>
            <button onClick={props.clickHandler}>Play again</button>
        </div>
    )
}

export default winScreen;