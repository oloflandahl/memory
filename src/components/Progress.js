import React from 'react';
import PropTypes from 'prop-types';
import './Progress.css';

const Progress = ({ isGameActive, noOfUsedIcons, gameState }) => {

  const progressStyle = { width: (100 * gameState.noOfSuccesses / noOfUsedIcons) + '%' };
  return isGameActive ? (
    <div className="progress-container">
      <div className="progress" style={progressStyle}></div>
    </div>
  ) : null;

};

Progress.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  noOfUsedIcons: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    noOfSuccesses: PropTypes.number.isRequired,
    noOfFails: PropTypes.number.isRequired
  }).isRequired
};

export default Progress;