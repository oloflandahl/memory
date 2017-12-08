import { SET_NO_OF_CARDS, SET_NO_OF_MATCHES } from '../actions/gameActions';
import { initialGameNumbers } from '../data/constants';

const gameNumbersReducer = (state = initialGameNumbers, action) => {
  switch(action.type) {
    case SET_NO_OF_CARDS:
      return Object.assign({}, state, { noOfCards: action.noOfCards });
    case SET_NO_OF_MATCHES:
      return Object.assign({}, state, { noOfMatches: action.noOfMatches });
    default:
      return state;
  }
};

export default gameNumbersReducer;