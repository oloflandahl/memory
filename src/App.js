import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import allReducers from './reducers/';
import Game from './components/Game';
import './App.css';

const store = createStore(
  allReducers,
  applyMiddleware(ReduxThunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;