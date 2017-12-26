// Action types

export const SET_NO_OF_CARDS = 'SET_NO_OF_CARDS';
export const SET_NO_OF_MATCHES = 'SET_NO_OF_MATCHES';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const TOGGLE_LOCK_GAME = 'TOGGLE_LOCK_GAME';


// Action creators

export const setNoOfCards = (noOfCards) => ({
  type: SET_NO_OF_CARDS,
  noOfCards
});

export const setNoOfMatches = (noOfMatches) => ({
  type: SET_NO_OF_MATCHES,
  noOfMatches
});

export const startGame = (noOfCards, noOfMatches) => ({ 
  type: START_GAME, 
  noOfCards, 
  noOfMatches 
});

export const endGame = () => ({ 
  type: END_GAME
});

export const toggleLockGame = lock => ({
  type: TOGGLE_LOCK_GAME,
  lock
});