import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.css';

const Cards = ({ cards, onCardClick }) => {
  const cardsMarkup = cards.map((card) => <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />);
  return (<div class="cards-container">{cardsMarkup}</div>);
};

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