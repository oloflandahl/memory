import { SET_NO_OF_CARDS, SET_NO_OF_MATCHES } from '../actions/gameActions';
import { initialGameNumbers } from '../data/constants';
import gameNumbersReducer from './gameNumbersReducer';

let action;

describe(SET_NO_OF_CARDS, () => {

  beforeEach(() => {
    action = {
      type: SET_NO_OF_CARDS
    }
  });

  it('setting number of cards to 25', () => {
    action.noOfCards = 25;
    const gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.noOfCards).toEqual(25);
  });

});

describe(SET_NO_OF_MATCHES, () => {

  beforeEach(() => {
    action = {
      type: SET_NO_OF_MATCHES
    }
  });

  it('setting number of matches to 4', () => {
    action.noOfMatches = 4;
    const gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.noOfMatches).toEqual(4);
  });

});