import { connect } from 'react-redux'
import { getMaxPercentageSize, getWholeSeconds } from '../helpers/mathHelpers'
import { flipCard } from '../actions/cardActions'
import Cards from '../components/Cards'

const mapStateToProps = state => {
  const noOfCards = state.cards.length;
  const percentage = getMaxPercentageSize(noOfCards) + '%';
  const isDone = noOfCards > 0 && state.cards.filter(card => card.isDone).length === noOfCards;
  const doneStats = isDone ? Object.assign({}, state.gameNumbers, state.gameState, { seconds: getWholeSeconds(state.gameState.startTime, new Date()) }) : null;
  return {
    cards: state.cards,
    doneStats: doneStats,
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