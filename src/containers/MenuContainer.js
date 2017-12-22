import { connect } from 'react-redux'
import { setNoOfCards, setNoOfMatches, startGame, endGame } from '../actions/gameActions'
import Menu from '../components/Menu'

const mapStateToProps = state => {
  const gameState = state.gameState;
  const isStarted = gameState.isStarted;
  const isDone = gameState.isDone;

  return {
    showStartControls: !isStarted,
    isGameActive: isStarted && !isDone,
    gameState: gameState,
    gameNumbers: state.gameNumbers,
    noOfUsedIcons: state.gameNumbers.noOfCards / state.gameNumbers.noOfMatches
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
    onRestartGame: () => {
      dispatch(endGame());
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;