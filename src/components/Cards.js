import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ cards, onCardClick }) => (
    cards.map((card) => <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />)
);

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
      isDone: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Cards;