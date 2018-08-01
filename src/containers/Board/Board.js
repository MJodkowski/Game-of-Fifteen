import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import TileClass from '../../classes/TileClass';
import classes from './Board.css';



class Board extends Component {
    TILE_SIZE = Math.round(window.innerHeight / 2 / this.props.size);
    componentWillMount() {
      this.initializeBoard();
    }
    initializeBoard() {
      const board = [];
      this.setState({style: {width: this.props.size * this.TILE_SIZE,
                    height: this.props.size * this.TILE_SIZE
      }});
      let idCounter = this.props.size ** 2 - 1;
      for (let x = 0; x < this.props.size; x++) {
        for (let y = 0; y < this.props.size; y++) {
          board.push(new TileClass (idCounter, [x, y]));
          idCounter--;
        }
      }
      this.setState({
        board: board 
      });
    }
    createTiles(board) {
      if (!board) {
        return;
      }
      return board.map((tile, index) => {
        return <Tile 
          key={index} 
          value={this.state.board[index].value}
          size={this.TILE_SIZE} 
          move={(e) => this.clickHandler(e)}>
        </Tile>;
      });
    }
    clickHandler(e) {
      const newBoard = [...this.state.board];
      let currentButtonPlace = {}, zeroButtonPlace = {};
      newBoard.forEach(tile => {
        if (tile.value === 0) {
          zeroButtonPlace = tile;
        }
        if (tile.value === parseInt(e.target.innerText, 10))
         currentButtonPlace = tile;
        });
      if (this.checkMoveLegal(currentButtonPlace, zeroButtonPlace)) {
          [zeroButtonPlace.value, currentButtonPlace.value] = [currentButtonPlace.value, zeroButtonPlace.value];      
        }
      this.setState({board: newBoard});
      if (this.checkIfWon(this.state.board)) {
        this.props.changeState('won', true);
        this.props.changeState('game', false);
      }
    }
    checkMoveLegal(a, b) {
      if (a === undefined || b === undefined) {
        return false;
      } else if ((a.coordinates[0] - 1 === b.coordinates[0] 
        && a.coordinates[1] === b.coordinates[1]) 
        ||  (a.coordinates[0] + 1 === b.coordinates[0] 
        && a.coordinates[1] === b.coordinates[1]) 
        ||  (a.coordinates[1] + 1 === b.coordinates[1] 
        && a.coordinates[0] === b.coordinates[0]) 
        || (a.coordinates[1] - 1 === b.coordinates[1] 
        && a.coordinates[0] === b.coordinates[0])) {
        return true;
      } else {
        return false;
      }
    }
    checkIfWon (a) {
      let wincounter = 0;
      for (let x of a) {
        if (x.value === this.props.size * x.coordinates[0] + 1 + x.coordinates[1]) {
          wincounter ++;
        }
      }
      if (wincounter === this.props.size ** 2 - 1) {
        return true;
        } else {
          return false;
      }
    }

    render() {
      const currBoard = this.createTiles(this.state.board);
      return (
        <div style={this.state.style} className={classes.Board}>{currBoard}</div>
      );
    }
  }
  
  export default Board;
