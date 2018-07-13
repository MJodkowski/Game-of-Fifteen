import React, { Component } from 'react';
import Tile from '../components/Tile';
import TileClass from '../classes/TileClass';

class Board extends Component {
    state = {
    };
    componentWillMount() {
      this.initializeBoard();
    }
    initializeBoard() {
      const board = [];
      let idCounter = 8;
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
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
        return <Tile key={index} value={this.state.board[index].value} move={(e) => this.clickHandler(e)}></Tile>;
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
        this.props.wonToggle();
        this.props.gameToggle();
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
        if (x.value === 3 * x.coordinates[0] + 1 + x.coordinates[1]) {
          wincounter ++;
        }
      }
      if (wincounter === 9 - 1) {
        return true;
        } else {
          return false;
      }
    }
    style = {
      display: 'flex',
      width: '120px',
      flexWrap: 'wrap',
    }
  
    render() {
      const currBoard = this.createTiles(this.state.board);
      console.log('board is: ', this.state.board);
      return (
        <div>
          <div style={this.style}>{currBoard}</div>
        </div>
      );
    }
  }
  
  export default Board;