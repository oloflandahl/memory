import { START_GAME, DONE_GAME, END_GAME, TOGGLE_LOCK_GAME } from '../actions/gameActions';
import { DEACTIVATE_CARDS, CARD_TYPE_TO_DONE } from '../actions/cardActions';
import { initialGameState } from '../data/constants';

const gameStateReducer = (state = initialGameState, action) => {
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

export default gameStateReducer;