import React from 'react';
import { Card } from './Card';
import { Types } from './../data/Types';

class Game extends React.Component {
  constructor(props) {
    super(props);

    let noOfCards = Math.abs(props.count) || 10;
    if (noOfCards % 2 !== 0) {
      noOfCards++;
    }

    let noOfTypes = noOfCards / 2;
    if (noOfTypes > Types.length) {
      noOfTypes = Types.length;
      noOfCards = noOfTypes * 2;
    }

    let cards = [];
    for (let i = 1; i <= noOfCards; i++) {
      cards.push({ id: i, name: 'Card '+i, isOpen: false, isLocked: false, type: Types[i % noOfTypes] });
    }
    this.state = {
      cards: cards,
      noOfTries: 0,
      noOfSuccess: 0,
      noOfFails: 0
    };

    this.handleOpen = this.handleOpen.bind(this);
  }

  update(cards) {
    let noOfTries = this.state.noOfTries;
    let noOfSuccess = this.state.noOfSuccess;
    let noOfFails = this.state.noOfFails;

    let activeCards = cards.filter((card) => card.isOpen && !card.isLocked);
    if (activeCards.length === 2) {
      if (activeCards[0].type === activeCards[1].type) {
        cards = cards.map((card) => lockCard(card, card.isLocked || card.type === activeCards[0].type));
        noOfSuccess++;
      } else {
        noOfFails++;
        setTimeout(this.retry.bind(this), 2000);
      }
      
      noOfTries++;
    }

    this.setState({
      cards: cards,
      noOfTries: noOfTries,
      noOfSuccess: noOfSuccess,
      noOfFails: noOfFails
    });
  }

  retry() {
    let cards = this.state.cards.map((card) => toggleCard(card));
    this.setState({cards: cards});
  }

  handleOpen(id) {
    let cards = this.state.cards.map((card) => toggleCard(card, card.isOpen || card.id === id));
    this.update(cards);
  }

  render() {
    return (
      <div>
        <h1>The Game</h1>
        <div>Number of tries: {this.state.noOfTries}</div>
        <div>Number of success: {this.state.noOfSuccess}</div>
        <div>Number of fails: {this.state.noOfFails}</div>
        {this.state.cards.map((card) => <Card key={card.id} card={card} onOpen={this.handleOpen} />)}
      </div>
    );
  }
}

function toggleCard(card, open) {
  open = open || false;
  return Object.assign({}, card, { isOpen: open });
}

function lockCard(card, lock) {
  lock = lock || false;
  return Object.assign({}, card, { isLocked: lock });
}

export { Game };