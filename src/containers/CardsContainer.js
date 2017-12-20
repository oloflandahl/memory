import { connect } from 'react-redux'
import { getMaxPercentageSize } from '../helpers/mathHelpers'
import { flipCard } from '../actions/cardActions'
import Cards from '../components/Cards'

const mapStateToProps = state => {
  const percentage = getMaxPercentageSize(state.cards.length) + '%';
  return {
    cards: state.cards,
    isLocked: state.gameState.isLocked,
    size: {
      width: percentage,
      height: percentage
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCardClick: id => {
      dispatch(flipCard(id));
    }
  }
};

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;