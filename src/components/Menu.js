import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ showStartControls, showResetButton, gameNumbers, gameState, onChangeNoOfCards, onChangeNoOfMatches, onStartGame, onRestartGame }) => {

  const startControls = showStartControls ? (
      <div>
        <input type="number" defaultValue={gameNumbers.noOfCards} onChange={onChangeNoOfCards} />
        <input type="number" defaultValue={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} />
        <button onClick={onStartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)}>Start</button>
      </div>
    ) : null;

  const resetButton = showResetButton ? (
      <button onClick={onRestartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)}>Restart</button>
    ) : null;

  return (
    <div>
      <div>
        {startControls}
        {resetButton}
      </div>
      <div>
        <div>Success: {gameState.noOfSuccesses}</div>
        <div>Fail: {gameState.noOfFails}</div>
      </div>
    </div>
  );

};

Menu.propTypes = {
  showStartControls: PropTypes.bool.isRequired,
  showResetButton: PropTypes.bool.isRequired,
  gameNumbers: PropTypes.shape({
    noOfCards: PropTypes.number.isRequired,
    noOfMatches: PropTypes.number.isRequired
  }).isRequired,
  gameState: PropTypes.shape({
    noOfSuccesses: PropTypes.number.isRequired,
    noOfFails: PropTypes.number.isRequired
  }).isRequired,
  onChangeNoOfCards: PropTypes.func.isRequired,
  onChangeNoOfMatches: PropTypes.func.isRequired,
  onStartGame: PropTypes.func.isRequired,
  onRestartGame: PropTypes.func.isRequired
};

export default Menu;