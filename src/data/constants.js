export const defaultNoOfCards = 10;
export const defaultNoOfMatches = 2;
export const defaultLockTimeMs = 2000;

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