import { SET_NO_OF_CARDS, SET_NO_OF_MATCHES } from '../actions/gameActions';
import { initialGameNumbers, limits } from '../data/constants';
import gameNumbersReducer from './gameNumbersReducer';

let action;

describe(SET_NO_OF_CARDS, () => {

  beforeEach(() => {
    action = {
      type: SET_NO_OF_CARDS
    }
  });

  describe('setting number of cards to 17', () => {

    let gameNumbers;
    beforeEach(() => {
      action.noOfCards = 17;
      gameNumbers = gameNumbersReducer(undefined, action);
    });

    it('number of cards should be 17', () => {
      expect(gameNumbers.noOfCards).toEqual(17);
    });

    it('number of matches should be 2', () => {
      expect(gameNumbers.noOfMatches).toEqual(2);
    });

    it('numbers should be invalid', () => {
      expect(gameNumbers.isValid).toEqual(false);
    });
  });

  describe('setting number of cards to 12', () => {

    let gameNumbers;
    beforeEach(() => {
      action.noOfCards = 12;
      gameNumbers = gameNumbersReducer(undefined, action);
    });

    it('number of cards should be 12', () => {
      expect(gameNumbers.noOfCards).toEqual(12);
    });

    it('number of matches should be 2', () => {
      expect(gameNumbers.noOfMatches).toEqual(2);
    });

    it('numbers should be valid', () => {
      expect(gameNumbers.isValid).toEqual(true);
    });
  });

});

describe(SET_NO_OF_MATCHES, () => {

  beforeEach(() => {
    action = {
      type: SET_NO_OF_MATCHES
    }
  });

  describe('setting number of matches to 3', () => {

    let gameNumbers;
    beforeEach(() => {
      action.noOfMatches = 3;
      gameNumbers = gameNumbersReducer(undefined, action);
    });

    it('number of cards should be 16', () => {
      expect(gameNumbers.noOfCards).toEqual(16);
    });

    it('number of matches should be 3', () => {
      expect(gameNumbers.noOfMatches).toEqual(3);
    });

    it('numbers should be invalid', () => {
      expect(gameNumbers.isValid).toEqual(false);
    });
  });

  describe('setting number of matches to 4', () => {

    let gameNumbers;
    beforeEach(() => {
      action.noOfMatches = 4;
      gameNumbers = gameNumbersReducer(undefined, action);
    });

    it('number of cards should be 16', () => {
      expect(gameNumbers.noOfCards).toEqual(16);
    });

    it('number of matches should be 4', () => {
      expect(gameNumbers.noOfMatches).toEqual(4);
    });

    it('numbers should be valid', () => {
      expect(gameNumbers.isValid).toEqual(true);
    });
  });

  it('setting number of cards outside limits should make it invalid', () => {
    let gameNumbers;

    action.noOfCards = limits.minNoOfCards - 1;
    gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.isValid).toEqual(false);

    action.noOfCards = limits.maxNoOfCards + 1;
    gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.isValid).toEqual(false);
  });

  it('setting number of matches outside limits should make it invalid', () => {
    let gameNumbers;

    action.noOfMatches = limits.minNoOfMatches - 2;
    gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.isValid).toEqual(false);

    action.noOfMatches = limits.maxNoOfMatches + 2;
    gameNumbers = gameNumbersReducer(undefined, action);
    expect(gameNumbers.isValid).toEqual(false);
  });

});