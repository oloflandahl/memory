import { initialCardState } from '../data/constants';
import { toggleCardActive, toggleCardDone } from './cardHelpers';

const card = Object.assign({}, initialCardState, {id: 1});
const activeCard = Object.assign({}, initialCardState, {id: 2, isActive: true});
const doneCard = Object.assign({}, initialCardState, {id: 3, isDone: true});

describe('toggleCardActive', () => {

  it('should toggle the card to the specified active value, unless done', () => {
    expect(toggleCardActive(card, true).isActive).toEqual(true);
    expect(toggleCardActive(card, false).isActive).toEqual(false);
    expect(toggleCardActive(activeCard, true).isActive).toEqual(true);
    expect(toggleCardActive(activeCard, false).isActive).toEqual(false);
    expect(toggleCardActive(doneCard, true).isActive).toEqual(false);
    expect(toggleCardActive(doneCard, false).isActive).toEqual(false);
  });
  
});

describe('toggleCardDone', () => {

  it('should toggle the card to the specified done value', () => {
    expect(toggleCardDone(card, true).isDone).toEqual(true);
    expect(toggleCardDone(card, false).isDone).toEqual(false);
    expect(toggleCardDone(activeCard, true).isDone).toEqual(true);
    expect(toggleCardDone(activeCard, false).isDone).toEqual(false);
    expect(toggleCardDone(doneCard, true).isDone).toEqual(true);
    expect(toggleCardDone(doneCard, false).isDone).toEqual(false);
  });

  it('should toggle the card to inactive if toggled to done', () => {
    expect(toggleCardDone(card, true).isActive).toEqual(false);
    expect(toggleCardDone(activeCard, true).isActive).toEqual(false);
    expect(toggleCardDone(doneCard, true).isActive).toEqual(false);
  });
  
});