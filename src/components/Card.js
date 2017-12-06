import React from 'react';


const Card = ({onClick, name, isActive, isDone, type}) => {

  const isOpen = isActive || isDone;
  const className = 'card' + (isOpen ? ' open' : '') + (isDone ? ' locked' : '');
  const typeElement = isOpen ? (<div>{type}</div>) : null;

  return (
    <div className={className} onClick={onClick} >
      <div>{name}</div>
      {typeElement}
    </div>
  );
};

export default Card;