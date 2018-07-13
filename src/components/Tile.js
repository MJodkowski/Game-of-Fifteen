import React from 'react';

const tile = (props) => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: '40px',
        height: '40px',
        textAlign: 'center',
        alignItems: 'center',
        border: '1px solid black',
        backgroundColor: 'red'
    }
    return (
        <div style={style} onClick={props.move}>
            {props.value}
        </div>
    )
}

export default tile;