import { END_GAME, SET_NO_OF_CARDS, SET_NO_OF_MATCHES } from '../actions/gameActions';
import { initialGameNumbers, limits } from '../data/constants';
import { icons } from '../data/icons';
import { getValueBetween, isBetween } from '../helpers/mathHelpers';

const limitsAndValidation = (state) => {
  let noOfCards = state.noOfCards;
  let noOfMatches = state.noOfMatches;
  const noOfIcons = icons.length;

  noOfMatches = getValueBetween(noOfMatches, limits.minNoOfMatches, limits.maxNoOfMatches);
  noOfCards = getValueBetween(noOfCards, limits.minNoOfCards, limits.maxNoOfCards);
  noOfCards -= (noOfCards % noOfMatches);

  const updatedLimits = Object.assign({}, limits, {
    minNoOfCards: Math.min(limits.minNoOfCards, noOfMatches),
    maxNoOfCards: Math.min(limits.maxNoOfCards, noOfMatches * noOfIcons)
  });

  if (!noOfCards) {
    noOfCards = noOfMatches;
  }
  const isValid = 
    isBetween(noOfCards, updatedLimits.minNoOfCards, updatedLimits.maxNoOfCards) && 
    isBetween(noOfMatches, updatedLimits.minNoOfMatches, updatedLimits.maxNoOfMatches) &&
    noOfCards % noOfMatches === 0;

  return { 
    noOfCards: noOfCards,
    noOfMatches: noOfMatches,
    limits: updatedLimits, 
    isValid: isValid 
  };
};

const gameNumbersReducer = (state = initialGameNumbers, action) => {
  let newState;
  switch(action.type) {
    case END_GAME:
      return initialGameNumbers;
    case SET_NO_OF_CARDS:
      newState = Object.assign({}, state, { noOfCards: action.noOfCards });
      return Object.assign(newState, limitsAndValidation(newState));
    case SET_NO_OF_MATCHES:
      newState = Object.assign({}, state, { noOfMatches: action.noOfMatches });
      return Object.assign(newState, limitsAndValidation(newState));
    default:
      return state;
  }
};

export default gameNumbersReducer;