import React from 'react';

const Menu = ({ gameState, onStartGame, onRestartGame }) => {

  const startButton = !gameState.isStarted ? (
      <button onClick={onStartGame}>Start</button>
    ) : null;

  const resetButton = gameState.isStarted && !gameState.isDone ? (
      <button onClick={onRestartGame}>Restart</button>
    ) : null;

  return (
    <div>
      <div>
        {startButton}
        {resetButton}
      </div>
      <div>
        <div>Success: {gameState.noOfSuccesses}</div>
        <div>Fail: {gameState.noOfFails}</div>
      </div>
    </div>
  );
};

export default Menu;