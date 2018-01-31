import React from 'react';
import PropTypes from 'prop-types';
import FaClone from 'react-icons/lib/fa/clone';
import FaTh from 'react-icons/lib/fa/th';
import Input from './Input';

const StartControls = ({ showStartControls, gameNumbers, onChangeNoOfCards, onChangeNoOfMatches }) => {

  return showStartControls ? (
    <div>
      <Input icon={(<FaTh />)} value={gameNumbers.noOfCards} onChange={onChangeNoOfCards} min={gameNumbers.noOfMatches} max={gameNumbers.limits.maxNoOfCards} step={gameNumbers.noOfMatches} />
      <Input icon={(<FaClone />)} value={gameNumbers.noOfMatches} onChange={onChangeNoOfMatches} min={gameNumbers.limits.minNoOfMatches} max={gameNumbers.limits.maxNoOfMatches} step={1} />
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