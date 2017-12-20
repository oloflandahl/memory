import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({onClick, name, isActive, isDone, isLocked, icon, size}) => {

  const isOpen = isActive || isDone;
  const className = 'card' + 
    (isOpen ? ' open' : '') + 
    (isDone ? ' done' : '') + 
    (isLocked ? ' locked' : '');

  return (
    <div className="card-container" style={size}>
      <div className={className} onClick={onClick} >
        <div className="front">
          <span className="icon">{icon}</span>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

export default Card;