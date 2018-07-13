import React from 'react';

const chooseSize = (props) => {
    let size = props.size;
    return (
        <div>
            <button onClick={() => props.sizeHandler(size + 1)}>Up</button>
            <button onClick={props.clickHandler}>Play</button>
            <button onClick={() => props.sizeHandler(size - 1)}>Down</button>
            <p>{props.size}</p>
        </div>
    );
}

export default chooseSize;