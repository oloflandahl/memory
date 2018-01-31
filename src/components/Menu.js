import React from 'react';
import PropTypes from 'prop-types';
import FaPlay from 'react-icons/lib/fa/play';
import FaStop from 'react-icons/lib/fa/stop';
import StartControls from './StartControls';
import Progress from './Progress';
import Stats from './Stats';
import './Menu.css';

const Menu = ({ showStartControls, isGameActive, gameNumbers, noOfUsedIcons, gameState, onChangeNoOfCards, onChangeNoOfMatches, onStartGame, onRestartGame }) => {

  const button = isGameActive ? ( <span className="action-icon" onClick={onRestartGame.bind(this)}><FaStop /></span> ) : 
    ( <span className="action-icon" onClick={onStartGame.bind(this, gameNumbers.noOfCards, gameNumbers.noOfMatches)} disabled={!gameNumbers.isValid}><FaPlay /></span> );

  return (
    <div className="menu-container">
      <div>
        <StartControls showStartControls={showStartControls} gameNumbers={gameNumbers} onChangeNoOfCards={onChangeNoOfCards} onChangeNoOfMatches={onChangeNoOfMatches} onStartGame={onStartGame} />
        <Progress isGameActive={isGameActive} noOfUsedIcons={noOfUsedIcons} gameState={gameState} />
        <Stats isGameActive={isGameActive} gameState={gameState} noOfUsedIcons={noOfUsedIcons} />
      </div>
      <div>
        {button}
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