import React from 'react';
import Card from './Card'


const Cards = ({ cards, onCardClick }) => (
    cards.map((card) => <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />)
);

export default Cards;