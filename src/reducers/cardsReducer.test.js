import { START_GAME, END_GAME } from '../actions/gameActions';
import { ACTIVATE_CARD, DEACTIVATE_CARDS, CARD_ICON_TO_DONE } from '../actions/cardActions';
import { icons } from '../data/icons';
import { defaultNoOfCards, defaultNoOfMatches, initialCardState } from '../data/constants';
import cardsReducer from './cardsReducer';


const card = Object.assign({}, initialCardState, {id: 1, icon: 'ICON'});
const activeCard = Object.assign({}, initialCardState, {id: 2, isActive: true, icon: 'ICON'});
const doneCard = Object.assign({}, initialCardState, {id: 3, isDone: true, icon: 'ICON'});
const mockCards = [
  card, 
  activeCard, 
  doneCard
];

let action;

describe(START_GAME, () => {

  beforeEach(() => {
    action = {
      icon: START_GAME
    }
  });

  it('starting a game should initialize cards with default values', () => {
    const cards = cardsReducer(undefined, action);
    expect(cards.length).toEqual(defaultNoOfCards);
    expect(cards.filter(card => card.icon === icons[0]).length).toEqual(defaultNoOfMatches);
  });

  it('starting a game with specified numbers should initialize cards with those values', () => {
    action.noOfCards = 20;
    action.noOfMatches = 4;
    const cards = cardsReducer(undefined, action);
    expect(cards.length).toEqual(action.noOfCards);
    expect(cards.filter(card => card.icon === icons[0]).length).toEqual(action.noOfMatches);
  });
});

describe(END_GAME, () => {

  beforeEach(() => {
    action = {
      icon: END_GAME
    }
  });

  it('ending a game should clear all cards', () => {
    const cards = cardsReducer(mockCards, action);
    expect(cards).toEqual([]);
  });

});

describe(ACTIVATE_CARD, () => {

  beforeEach(() => {
    action = {
      icon: ACTIVATE_CARD
    }
  });

  it('activating an inactive card should activate it', () => {
    action.id = 1;
    const cards = cardsReducer(mockCards, action);
    expect(cards[0].isActive).toEqual(true);
  });

  it('activating an already active card should do nothing', () => {
    action.id = 2;
    const cards = cardsReducer(mockCards, action);
    expect(cards[1].isActive).toEqual(true);
  });

  it('activating a done card should not activate it', () => {
    action.id = 3;
    const cards = cardsReducer(mockCards, action);
    expect(cards[2].isActive).toEqual(false);
  });

});

describe(DEACTIVATE_CARDS, () => {

  beforeEach(() => {
    action = {
      icon: DEACTIVATE_CARDS
    }
  });

  it('should deactivate all cards', () => {
    const cards = cardsReducer(mockCards, action);
    expect(cards[0].isActive).toEqual(false);
    expect(cards[1].isActive).toEqual(false);
    expect(cards[2].isActive).toEqual(false);
  });

});

describe(CARD_ICON_TO_DONE, () => {

  beforeEach(() => {
    action = {
      icon: CARD_ICON_TO_DONE,
      cardIcon: 'ICON'
    }
  });

  it('setting an inactive card to done should make it done', () => {
    const cards = cardsReducer(mockCards, action);
    expect(cards[0].isDone).toEqual(true);
  });

  it('setting an active card to done should make it done', () => {
    const cards = cardsReducer(mockCards, action);
    expect(cards[1].isDone).toEqual(true);
  });

  it('setting an already done card to done should do nothing', () => {
    const cards = cardsReducer(mockCards, action);
    expect(cards[2].isDone).toEqual(true);
  });

  it('setting another icon to done should do nothing', () => {
    action.cardIcon = 'ICON2';
    const cards = cardsReducer(mockCards, action);
    expect(cards[0].isDone).toEqual(false);
    expect(cards[1].isDone).toEqual(false);
    expect(cards[2].isDone).toEqual(true);
  });

});
