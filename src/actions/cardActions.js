import { defaultLockTimeMs } from '../data/constants';
import { getCard, getActiveCards, getNoOfCardsWithIcon } from '../helpers/cardHelpers';
import { toggleLockGame } from './gameActions';


// Action types

export const ACTIVATE_CARD = 'ACTIVATE_CARD';
export const DEACTIVATE_CARDS = 'DEACTIVATE_CARDS';
export const CARD_ICON_TO_DONE = 'CARD_ICON_TO_DONE';


// Action creators

export const activateCard = id => ({
  type: ACTIVATE_CARD, 
  id
});

export const deactivateCards = () => ({
  type: DEACTIVATE_CARDS
});

export const setCardIconToDone = cardIcon => ({
  type: CARD_ICON_TO_DONE, 
  cardIcon
});

export const flipCard = id => {
  return (dispatch, getState) => {
    const { gameState, cards } = getState();

    if (gameState.isLocked || !gameState.isStarted) {
      return;
    }

    const card = getCard(cards, id);
    if (card.isActive) {
      return;
    }

    const noOfMatches = getNoOfCardsWithIcon(cards, card.icon);
    const activeCards = getActiveCards(cards);
    if (activeCards.length === noOfMatches - 1) {
      if (getNoOfCardsWithIcon(activeCards, card.icon) === noOfMatches - 1) {
        dispatch(setCardIconToDone(card.icon));
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

  };
};