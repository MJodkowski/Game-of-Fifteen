import React, { Component } from 'react';
import Board from './containers/Board/Board'
import ChooseSize from './components/ChooseSize/ChooseSize';
import WinScreen from './components/WinScreen/WinScreen';
import Wrapper from './AuxComponent/Wrapper';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import classes from './App.css';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    won: false,
    game: false,
    size: 3,
    modal: false,
    drawer: false
  }
  board = React.createRef();
  changeGameState = (stateName, newState) => {
    this.setState({[stateName]: newState});
  }
  hideModal = () => {
    this.setState({modal: false});
  }
  hideDrawer = () => {
    this.setState({drawer: false});
  }
  reset = () => {
    this.board.current.initializeBoard();
  }
  render() {
    let mainDisplay = null;

    if (this.state.game){
      mainDisplay = (
      <Board
        ref={this.board}
        size={this.state.size} 
        changeState={this.changeGameState} 
      />
    )} else if (this.state.won) {
      mainDisplay = (
        <WinScreen />
      );
    } else {
      mainDisplay = (
        <ChooseSize 
          changeState={this.changeGameState} 
          size={this.state.size} 
        />
      );
    }
    return (

      <Wrapper>
        <Header />
        <SideBar
            drawer={this.state.drawer}
            game={this.state.game}
            won={this.state.won}
            reset={this.reset}
            changeState={this.changeGameState}
            clickHandler={this.hideDrawer}/>
        <div className={classes.mainContainer}>
            {mainDisplay}
          <button onClick={() => this.setState({drawer: true})}className={classes.sideButton}>></button>
          <Modal display={this.state.modal} changeState={this.changeGameState} clickHandler={this.hideModal} />
        </div>
      </Wrapper>
    )
  }
}

export default App;

