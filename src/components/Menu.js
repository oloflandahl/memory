import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Menu.css';

const Menu = ({ showStartControls, isGameActive, gameNumbers, noOfUsedIcons, gameState, onChangeNoOfCards, onChangeNoOfMatches, onStartGame, onRestartGame }) => {

  const startControls = showStartControls ? (
      <div>
        <Input value={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} min={gameNumbers.limits.minNoOfMatches} max={gameNumbers.limits.maxNoOfMatches} step={1} />
        <Input value={gameNumbers.noOfCards} onChange={onChangeNoOfCards} min={gameNumbers.noOfMatches} max={gameNumbers.limits.maxNoOfCards} step={gameNumbers.noOfMatches} />
        <button className="btn" onClick={onStartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)} disabled={!gameNumbers.isValid}>Start</button>
      </div>
    ) : null;

  const resetButton = isGameActive ? (
      <button className="btn" onClick={onRestartGame.bind(this)}>Restart</button>
    ) : null;

  const stats = isGameActive ? (
    <div className="stats-container">
      <span className="stat">{gameState.noOfSuccesses}</span>
      /
      <span className="stat">{noOfUsedIcons}</span>
    </div>
  ) : null;

  const progressStyle = { width: (100 * gameState.noOfSuccesses / noOfUsedIcons) + '%' };
  const progress = isGameActive ? (
    <div className="progress-container">
      <div className="progress" style={progressStyle}></div>
    </div>
  ) : null;

  return (
    <div className="menu-container">
      <div>
        {startControls}
        {resetButton}
      </div>
      <div>
        {progress}
        {stats}
      </div>
    </div>
  );

};

Menu.propTypes = {
  showStartControls: PropTypes.bool.isRequired,
  isGameActive: PropTypes.bool.isRequired,
  gameNumbers: PropTypes.shape({
    noOfCards: PropTypes.number.isRequired,
    noOfMatches: PropTypes.number.isRequired
  }).isRequired,
  noOfUsedIcons: PropTypes.number.isRequired,
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