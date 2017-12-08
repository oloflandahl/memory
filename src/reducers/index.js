import { combineReducers } from 'redux';
import gameNumbers from './gameNumbersReducer';
import gameState from './gameStateReducer';
import cards from './cardsReducer';


const gameReducers = combineReducers({ gameNumbers, gameState, cards });

export default gameReducers;