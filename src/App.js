import React, { Component } from 'react';
import { Game } from './components/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game count="5" />
      </div>
    );
  }
}

export default App;