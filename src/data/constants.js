export const defaultNoOfCards = 15;
export const defaultNoOfMatches = 3;
export const defaultLockTimeMs = 2000;

export const limits = {
  minNoOfCards: 2,
  maxNoOfCards: 20,
  minNoOfMatches: 2,
  maxNoOfMatches: 5
};

export const initialGameNumbers = {
  noOfCards: defaultNoOfCards,
  noOfMatches: defaultNoOfMatches
};

export const initialGameState = { 
  isStarted: false, 
  isLocked: false, 
  isDone: false,
  noOfSuccesses: 0,
  noOfFails: 0
};

export const initialCardState = { 
  id: null,
  name: null,
  type: null,
  isActive: false, 
  isDone: false 
};