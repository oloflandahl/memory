import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';

const Stats = ({ isGameActive, noOfUsedIcons, gameState }) => {

  return isGameActive ? (
    <div className="stats-container">
      <span className="stat">{gameState.noOfSuccesses}</span>
      /
      <span className="stat">{noOfUsedIcons}</span>
    </div>
  ) : null;

};

Stats.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  noOfUsedIcons: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    noOfSuccesses: PropTypes.number.isRequired,
    noOfFails: PropTypes.number.isRequired
  }).isRequired,
};

export default Stats;