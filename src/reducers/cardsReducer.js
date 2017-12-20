import { START_GAME, END_GAME } from '../actions/gameActions';
import { ACTIVATE_CARD, DEACTIVATE_CARDS, CARD_ICON_TO_DONE } from '../actions/cardActions';
import { initCards, toggleCardActive, toggleCardDone } from '../helpers/cardHelpers';

const cardsReducer = (state = [], action) => {
  switch(action.type) {
    case START_GAME:
      return initCards(action.noOfCards, action.noOfMatches);
    case END_GAME:
      return [];
    case ACTIVATE_CARD:
      return state.map(card => toggleCardActive(card, card.isActive || card.id === action.id));
    case DEACTIVATE_CARDS:
      return state.map(card => toggleCardActive(card, false));
    case CARD_ICON_TO_DONE:
      return state.map(card => toggleCardDone(card, card.isDone || card.icon === action.cardIcon));
    default:
      return state;
  }
};

export default cardsReducer;