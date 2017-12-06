import { connect } from 'react-redux'
import { setNoOfCards, setNoOfMatches, startGame } from '../state/actions'
import Menu from '../components/Menu'

const mapStateToProps = state => ({
  gameNumbers: state.gameNumbers,
  gameState: state.gameState
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeNoOfCards: (event) => {
      const noOfCards = parseInt(event.target.value) || 0;
      dispatch(setNoOfCards(noOfCards));
    },
    onChangeNoOfMatches: (event) => {
      const noOfMatches = parseInt(event.target.value) || 0;
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