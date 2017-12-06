import React from 'react';

const Menu = ({ gameNumbers, gameState, onChangeNoOfCards, onChangeNoOfMatches, onStartGame, onRestartGame }) => {

  const noOfCardsInput = !gameState.isStarted ? (
      <input type="number" defaultValue={gameNumbers.noOfCards} onChange={onChangeNoOfCards} />
    ) : null;

  const noOfMatchesInput = !gameState.isStarted ? (
      <input type="number" defaultValue={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} />
    ) : null;

  const startButton = !gameState.isStarted ? (
      <button onClick={onStartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)}>Start</button>
    ) : null;

  const resetButton = gameState.isStarted && !gameState.isDone ? (
      <button onClick={onRestartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)}>Restart</button>
    ) : null;

  return (
    <div>
      <div>
        {noOfCardsInput}
        {noOfMatchesInput}
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