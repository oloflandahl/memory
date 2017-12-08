import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({onClick, name, isActive, isDone, type}) => {

  const isOpen = isActive || isDone;
  const className = 'card' + (isOpen ? ' open' : '') + (isDone ? ' done' : '');
  const typeElement = isOpen ? (<div>{type}</div>) : null;

  return (
    <div className={className} onClick={onClick} >
      <div>{name}</div>
      {typeElement}
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

export default Card;