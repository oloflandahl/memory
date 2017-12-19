import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Menu.css';

const Menu = ({ showStartControls, showResetButton, gameNumbers, gameState, onChangeNoOfCards, onChangeNoOfMatches, onStartGame, onRestartGame }) => {

  const startControls = showStartControls ? (
      <div>
        <Input value={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} min={gameNumbers.limits.minNoOfMatches} max={gameNumbers.limits.maxNoOfMatches} step={1} />
        <Input value={gameNumbers.noOfCards} onChange={onChangeNoOfCards} min={gameNumbers.noOfMatches} max={gameNumbers.limits.maxNoOfCards} step={gameNumbers.noOfMatches} />
        <button className="btn" onClick={onStartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)} disabled={!gameNumbers.isValid}>Start</button>
      </div>
    ) : null;

  const resetButton = showResetButton ? (
      <button className="btn" onClick={onRestartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)}>Restart</button>
    ) : null;

  return (
    <div className="menu-container">
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