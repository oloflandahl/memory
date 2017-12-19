import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({onClick, name, isActive, isDone, type, size}) => {

  const isOpen = isActive || isDone;
  const className = 'card' + (isOpen ? ' open' : '') + (isDone ? ' done' : '');
  const typeElement = isOpen ? (<span className="type">{type}</span>) : (<span className="type"></span>);

  return (
    <div className="card-container" style={size}>
      <div className={className} onClick={onClick} >
        {typeElement}
      </div>
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  type: PropTypes.object.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

export default Card;