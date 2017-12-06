import { connect } from 'react-redux'
import { startGame } from '../state/actions'
import Menu from '../components/Menu'

const mapStateToProps = state => ({
  gameState: state.gameState
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStartGame: () => {
      dispatch(startGame(ownProps.noOfCards, 2));
    },
    onRestartGame: () => {
      dispatch(startGame(ownProps.noOfCards, 2));
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;