import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onOpen(this.props.card.id);
  }

  render() {
    let className = 'card';
    let type = '';

    let card = this.props.card;
    if (card.isOpen || card.isLocked) {
      className += ' open';
      type = <div>{card.type}</div>;
    }
    if (card.isLocked) {
      className += ' open locked';
    }

    return (
      <div className={className} onClick={this.handleClick}>
        <div>{card.name}</div>
        {type}
      </div>
    );
  }
}

export { Card };