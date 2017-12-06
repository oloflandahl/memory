import { combineReducers } from 'redux'
import { SET_NO_OF_CARDS, SET_NO_OF_MATCHES, START_GAME, DONE_GAME, END_GAME, TOGGLE_LOCK_GAME, ACTIVATE_CARD, DEACTIVATE_CARDS, CARD_TYPE_TO_DONE } from './actions';
import { initialGameNumbers, initialGameState } from '../data/constants';
import { initCards, toggleCardActive, toggleCardDone } from '../helpers/cards';

const gameNumbers = (state = initialGameNumbers, action) => {
  switch(action.type) {
    case SET_NO_OF_CARDS:
      return Object.assign({}, state, { noOfCards: action.noOfCards });
    case SET_NO_OF_MATCHES:
      return Object.assign({}, state, { noOfMatches: action.noOfMatches });
    default:
      return state;
  }
};

const gameState = (state = initialGameState, action) => {
  switch(action.type) {
    case START_GAME: 
      return Object.assign({}, initialGameState, { isStarted: true });
    case DONE_GAME:
      return Object.assign({}, state, { isDone: true });
    case END_GAME: 
      return Object.assign({}, state, { isStarted: false, isDone: false });
    case TOGGLE_LOCK_GAME: 
      return Object.assign({}, state, { isLocked: action.lock || false });
    case DEACTIVATE_CARDS:
      return Object.assign({}, state, { noOfFails: state.noOfFails + 1  });
    case CARD_TYPE_TO_DONE:
      return Object.assign({}, state, { noOfSuccesses: state.noOfSuccesses + 1  });
    default:
      return state;
  }
};

const cards = (state = [], action) => {
  switch(action.type) {
    case START_GAME: 
      return initCards(action.noOfCards, action.noOfMatches);
    case END_GAME: 
      return [];
    case ACTIVATE_CARD:
      return state.map(card => toggleCardActive(card, card.isActive || card.id === action.id));
    case DEACTIVATE_CARDS:
      return state.map(card => toggleCardActive(card, false));
    case CARD_TYPE_TO_DONE: 
      return state.map(card => toggleCardDone(card, card.isDone || card.type === action.cardType));
    default: 
      return state;
  }
};


const game = combineReducers({ gameNumbers, gameState, cards });

export default game;