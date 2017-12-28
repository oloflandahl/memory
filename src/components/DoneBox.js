import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close'
import './DoneBox.css';

const DoneBox = ({ doneStats, onCloseDoneBoxClick }) => {
  let className = 'done-box-container';
  if (doneStats) {
    className += ' in';
  } else {
    doneStats = {};
  }

  return ( 
    <div className={className}>
      <div className="done-box">
        <div className="done-box-inner">
          <div>Matches: {doneStats.noOfMatches}</div>
          <div>Cards: {doneStats.noOfCards}</div>
          <br />
          <div>Fails: {doneStats.noOfFails}</div>
          <div>Successes: {doneStats.noOfSuccesses}</div>
          <br />
          <div>Seconds: {doneStats.seconds}</div>
          <span className="close-icon" onClick={onCloseDoneBoxClick}><FaClose /></span>
        </div>
      </div>
    </div> 
  );
};

DoneBox.propTypes = {
  doneStats: PropTypes.object,
  onCloseDoneBoxClick: PropTypes.func.isRequired
};

export default DoneBox;