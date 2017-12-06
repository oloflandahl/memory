import { defaultLockTimeMs } from '../data/constants'
import { getCard, getActiveCards } from '../helpers/cards'


// Action types

export const START_GAME = 'START_GAME';
export const DONE_GAME = 'DONE_GAME';
export const END_GAME = 'END_GAME';
export const TOGGLE_LOCK_GAME = 'TOGGLE_LOCK_GAME';
export const ACTIVATE_CARD = 'ACTIVATE_CARD';
export const DEACTIVATE_CARDS = 'DEACTIVATE_CARDS';
export const CARD_TYPE_TO_DONE = 'CARD_TYPE_TO_DONE';


// Action creators

export const startGame = (noOfCards, noOfMatches) => ({ 
  type: START_GAME, 
  noOfCards, 
  noOfMatches 
});

export const doneGame = () => ({ 
  type: DONE_GAME
});

export const endGame = () => ({ 
  type: END_GAME
});

export const toggleLockGame = lock => ({
  type: TOGGLE_LOCK_GAME,
  lock
});

export const activateCard = id => ({
  type: ACTIVATE_CARD, 
  id
});

export const deactivateCards = () => ({
  type: DEACTIVATE_CARDS
});

export const setCardTypeToDone = cardType => ({
  type: CARD_TYPE_TO_DONE, 
  cardType
});

export const flipCard = id => {
  return (dispatch, getState) => {
    const { gameState, cards } = getState();

    if (gameState.isLocked || !gameState.isStarted) {
      return;
    }

    const card = getCard(cards, id);
    const activeCards = getActiveCards(cards);
    if (activeCards.length === 1 && activeCards[0].id !== card.id) {
      if (activeCards[0].type === card.type) {
        dispatch(setCardTypeToDone(card.type));
      } else {
        dispatch(activateCard(id));
        dispatch(toggleLockGame(true));
        setTimeout(() => {
          dispatch(toggleLockGame(false));
          dispatch(deactivateCards());
        }, defaultLockTimeMs);
      }
    } else {
      dispatch(activateCard(id));
    }

  }
};