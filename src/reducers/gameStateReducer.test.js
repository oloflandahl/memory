import { START_GAME, DONE_GAME, END_GAME, TOGGLE_LOCK_GAME } from '../actions/gameActions';
import { DEACTIVATE_CARDS, CARD_ICON_TO_DONE } from '../actions/cardActions';
import { initialGameState } from '../data/constants';
import gameStateReducer from './gameStateReducer';

let action;

describe(START_GAME, () => {

  beforeEach(() => {
    action = {
      type: START_GAME
    }
  });

  it('starting a game should mark it as started', () => {
    const gameState = gameStateReducer(undefined, action);
    expect(gameState.isStarted).toEqual(true);
  });

});

describe(DONE_GAME, () => {

  beforeEach(() => {
    action = {
      type: DONE_GAME
    }
  });

  it('when a game is done it should be marked as done', () => {
    const gameState = gameStateReducer(undefined, action);
    expect(gameState.isDone).toEqual(true);
  });

});

describe(END_GAME, () => {

  beforeEach(() => {
    action = {
      type: END_GAME
    }
  });

  it('when a game is ended it should not be marked as started', () => {
    const preGameState = Object.assign({}, initialGameState, {isStarted: true});
    const gameState = gameStateReducer(preGameState, action);
    expect(gameState.isStarted).toEqual(false);
  });

});

describe(TOGGLE_LOCK_GAME, () => {

  beforeEach(() => {
    action = {
      type: TOGGLE_LOCK_GAME
    }
  });

  it('when a game is locked it should be marked as locked', () => {
    action.lock = true;
    const gameState = gameStateReducer(undefined, action);
    expect(gameState.isLocked).toEqual(true);
  });

  it('when a locked game is unlocked it should not be marked as locked', () => {
    action.lock = false;
    const preGameState = Object.assign({}, initialGameState, {isLocked: true});
    const gameState = gameStateReducer(preGameState, action);
    expect(gameState.isLocked).toEqual(false);
  });

});

describe(DEACTIVATE_CARDS, () => {

  beforeEach(() => {
    action = {
      type: DEACTIVATE_CARDS
    }
  });

  it('when all active cards are deactivated, the number of fails counter should be incremented', () => {
    const gameState = gameStateReducer(undefined, action);
    expect(gameState.noOfFails).toEqual(1);
  });

});

describe(CARD_ICON_TO_DONE, () => {

  beforeEach(() => {
    action = {
      type: CARD_ICON_TO_DONE
    }
  });

  it('when cards are done, the number of successes counter should be incremented', () => {
    const gameState = gameStateReducer(undefined, action);
    expect(gameState.noOfSuccesses).toEqual(1);
  });

});