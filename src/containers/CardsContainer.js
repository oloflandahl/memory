import { connect } from 'react-redux'
import { flipCard } from '../actions/cardActions'
import Cards from '../components/Cards'

const mapStateToProps = state => ({
  cards: state.cards
});

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