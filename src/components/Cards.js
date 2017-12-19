import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Cards.css';

const Cards = ({ cards, onCardClick, size }) => {
  const cardsMarkup = cards.map((card) => <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} size={size} />);
  return (<div className="cards-container">{cardsMarkup}</div>);
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
      isDone: PropTypes.bool.isRequired,
      type: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

export default Cards;