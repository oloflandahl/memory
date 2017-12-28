import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import DoneBox from './DoneBox';
import './Cards.css';

const Cards = ({ cards, onCardClick, onCloseDoneBoxClick, size, doneStats, isLocked }) => {
  const cardsMarkup = cards.map((card) => <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} size={size} isLocked={isLocked} />);
  return (
    <div className="cards-container"><DoneBox doneStats={doneStats} onCloseDoneBoxClick={onCloseDoneBoxClick} />{cardsMarkup}</div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
      isDone: PropTypes.bool.isRequired,
      icon: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCloseDoneBoxClick: PropTypes.func.isRequired,
  doneStats: PropTypes.object,
  isLocked: PropTypes.bool.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

export default Cards;