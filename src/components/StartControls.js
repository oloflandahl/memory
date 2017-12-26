import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const StartControls = ({ showStartControls, gameNumbers, onChangeNoOfCards, onChangeNoOfMatches }) => {

  return showStartControls ? (
    <div>
      <Input header="Matches" value={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} min={gameNumbers.limits.minNoOfMatches} max={gameNumbers.limits.maxNoOfMatches} step={1} />
      <Input header="Cards" value={gameNumbers.noOfCards} onChange={onChangeNoOfCards} min={gameNumbers.noOfMatches} max={gameNumbers.limits.maxNoOfCards} step={gameNumbers.noOfMatches} />
    </div>
  ) : null;

};

StartControls.propTypes = {
  showStartControls: PropTypes.bool.isRequired,
  gameNumbers: PropTypes.shape({
    noOfCards: PropTypes.number.isRequired,
    noOfMatches: PropTypes.number.isRequired
  }).isRequired,
  onChangeNoOfCards: PropTypes.func.isRequired,
  onChangeNoOfMatches: PropTypes.func.isRequired
};

export default StartControls;