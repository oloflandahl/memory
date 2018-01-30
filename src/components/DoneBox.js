import React from 'react';
import PropTypes from 'prop-types';
import { getTimeText } from '../helpers/timeHelpers';
import DoneItem from './DoneItem';
import './DoneBox.css';

import FaClose from 'react-icons/lib/fa/close';
import FaClone from 'react-icons/lib/fa/clone';
import FaTh from 'react-icons/lib/fa/th';
import FaCheck from 'react-icons/lib/fa/check';
import FaClockO from 'react-icons/lib/fa/clock-o';


const DoneBox = ({ doneStats, onCloseDoneBoxClick }) => {

  let className = 'done-box-container';
  if (doneStats) {
    className += ' in';
  } else {
    doneStats = {};
  }

  const time = getTimeText(doneStats.seconds);

  const box = doneStats && doneStats.noOfSuccesses ? (
    <div className="done-box">
        <div className="done-box-inner">
          <DoneItem area="cards" text={doneStats.noOfCards}><FaTh /></DoneItem>
          <DoneItem area="matches" text={doneStats.noOfMatches}><FaClone /></DoneItem>
          <br />
          <DoneItem area="success" color="#afa" text={doneStats.noOfSuccesses}><FaCheck /></DoneItem>
          <DoneItem area="fail" color="#faa" text={doneStats.noOfFails}><FaClose /></DoneItem>
          <br />
          <DoneItem area="time" text={time}><FaClockO /></DoneItem>
        </div>
        <span className="close-icon" onClick={onCloseDoneBoxClick}><FaClose /></span>
      </div>
  ) : null;

  return ( 
    <div className={className}>
      { box }
    </div> 
  );
};

DoneBox.propTypes = {
  doneStats: PropTypes.object,
  onCloseDoneBoxClick: PropTypes.func.isRequired
};

export default DoneBox;