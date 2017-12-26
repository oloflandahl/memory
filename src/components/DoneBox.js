import React from 'react';
import PropTypes from 'prop-types';
import './DoneBox.css';

const DoneBox = ({ doneStats }) => {
  if (!doneStats) {
    return null;
  }

  return ( 
    <div className="done-box-container">
      <div className="done-box">
        <div>Matches: {doneStats.noOfMatches}</div>
        <div>Cards: {doneStats.noOfCards}</div>
        <br />
        <div>Fails: {doneStats.noOfFails}</div>
        <div>Successes: {doneStats.noOfSuccesses}</div>
        <br />
        <div>Seconds: {doneStats.seconds}</div>
      </div>
    </div> 
  );
};

DoneBox.propTypes = {
  doneStats: PropTypes.object
};

export default DoneBox;