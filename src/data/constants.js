export const defaultNoOfCards = 16;
export const defaultNoOfMatches = 2;
export const defaultLockTimeMs = 2000;

export const limits = {
  minNoOfCards: 2,
  maxNoOfCards: 20,
  minNoOfMatches: 2,
  maxNoOfMatches: 5
};

export const initialGameNumbers = {
  noOfCards: defaultNoOfCards,
  noOfMatches: defaultNoOfMatches,
  limits: limits,
  isValid: true
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
  icon: null,
  isActive: false, 
  isDone: false 
};