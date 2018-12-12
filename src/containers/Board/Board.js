import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import TileClass from '../../classes/TileClass';
import classes from './Board.css';



class Board extends Component {
    TILE_SIZE = `${100 / this.props.size}%`
    TEXT_SIZE = 120 / this.props.size;
    componentWillMount() {
      this.initializeBoard();
    }
    initializeBoard() {
      const board = [];
      let idCounter = this.props.size ** 2 - 1;
      for (let x = 0; x < this.props.size; x++) {
        for (let y = 0; y < this.props.size; y++) {
          board.push(new TileClass (idCounter, [x, y]));
          idCounter--;
        }
      }
      this.setState({board});
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
          fontSize={this.TEXT_SIZE} 
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
      if (Math.sqrt(Math.pow(b.coordinates[0] - a.coordinates[0], 2) + Math.pow(b.coordinates[1] - a.coordinates[1], 2)) === 1) {
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
      return wincounter === this.props.size ** 2 - 1;
    }

    render() {
      const currBoard = this.createTiles(this.state.board);
      return (
        <div className={classes.Board}>{currBoard}</div>
      );
    }
  }
  
  export default Board;
