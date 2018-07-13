import React, { Component } from 'react';
import Board from './containers/Board'
import ChooseSize from './components/ChooseSize';
import WinScreen from './components/WinScreen';

class App extends Component {
  state = {
    won: false,
    game: false,
    size: 3
  }
  changeGameState(stateName, newState) {
    this.setState({[stateName]: newState});
  }
  toggleGame() {
    const currState = this.state.game;
    this.setState({game: !currState});
  }
  toggleWon() {
    const currState = this.state.won;
    this.setState({won: !currState});
  }
  changeSize(size) {
    if (size < 3) {
      size = 3;
    } else if (size > 8) {
      size = 8;
    }
    this.setState({size: size})
  }
  // displayBoard() {
  // this.board = (<Board changeState={() => this.changeGameState.bind(this)}/>);
  // }
  render() {
    if (this.state.game){
      return (
      <Board gameToggle={this.toggleGame.bind(this)} wonToggle={this.toggleWon.bind(this)} />
    )} else if (this.state.won) {
      return (
        <div>
          <WinScreen clickHandler={(this.toggleWon.bind(this))} />
        </div>
      );
    } else {
      return (
        <div>
          <ChooseSize sizeHandler={this.changeSize.bind(this)} clickHandler={(this.toggleGame.bind(this))} size={this.state.size} />
        </div>
      );
    }
  }
}

export default App;
