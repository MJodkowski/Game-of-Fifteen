import React from 'react';
import classes from './Tile.css';

const tile = (props) => {
    const style = {
        width: props.size,
        height: props.size,
        fontSize: props.fontSize
    }

    if (props.value === 0) {
        return (
            <div className={classes.TileZero} style={style} onClick={props.move}>
                {props.value}
            </div>
        )
    } else {
        return (
            <div className={classes.Tile} style={style} onClick={props.move}>
                {props.value}
            </div>
        )
    }
}

export default tile;