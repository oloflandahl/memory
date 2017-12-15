import { connect } from 'react-redux'
import { setNoOfCards, setNoOfMatches, startGame } from '../actions/gameActions'
import { limits } from '../data/constants'
import { types } from '../data/types'
import { isBetween } from '../helpers/mathHelpers'
import Menu from '../components/Menu'

const mapStateToProps = state => {
  const gameState = state.gameState;
  const isStarted = gameState.isStarted;
  const isDone = gameState.isDone;
  
  const gameNumbers = state.gameNumbers;
  const noOfCards = gameNumbers.noOfCards;
  const noOfMatches = gameNumbers.noOfMatches;
  const noOfTypes = types.length;
  const updatedLimits = Object.assign({}, limits, {
    minNoOfCards: Math.min(limits.minNoOfCards, noOfMatches),
    maxNoOfCards: Math.min(limits.maxNoOfCards, noOfMatches * noOfTypes)
  });

  const areGameNumbersValid = 
    isBetween(noOfCards, updatedLimits.minNoOfCards, updatedLimits.maxNoOfCards) && 
    isBetween(noOfMatches, updatedLimits.minNoOfMatches, updatedLimits.maxNoOfMatches) &&
    noOfCards % noOfMatches === 0;

  return {
    showStartControls: !isStarted,
    showResetButton: isStarted && !isDone,
    gameState: gameState,
    gameNumbers: gameNumbers,
    updatedLimits: updatedLimits,
    areGameNumbersValid: areGameNumbersValid
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeNoOfCards: (event) => {
      const noOfCards = parseInt(event.target.value, 10) || 0;
      dispatch(setNoOfCards(noOfCards));
    },
    onChangeNoOfMatches: (event) => {
      const noOfMatches = parseInt(event.target.value, 10) || 0;
      dispatch(setNoOfMatches(noOfMatches));
    },
    onStartGame: (noOfCards, noOfMatches) => {
      dispatch(startGame(noOfCards, noOfMatches));
    },
    onRestartGame: (noOfCards, noOfMatches) => {
      dispatch(startGame(noOfCards, noOfMatches));
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;