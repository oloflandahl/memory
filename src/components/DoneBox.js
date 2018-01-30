import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import FaClone from 'react-icons/lib/fa/clone';
import FaTh from 'react-icons/lib/fa/th';
import FaCheck from 'react-icons/lib/fa/check';
import FaClockO from 'react-icons/lib/fa/clock-o';
import './DoneBox.css';

const DoneBox = ({ doneStats, onCloseDoneBoxClick }) => {
  let className = 'done-box-container';
  if (doneStats) {
    className += ' in';
  } else {
    doneStats = {};
  }

  let sec = doneStats.seconds;
  let min = toWhole(sec);
  sec = toRest(sec);
  let h = toWhole(min);
  min = toRest(min);
  const time = [h, min, sec]
    .map(x => withPad(x.toString()))
    .join(':');

  return ( 
    <div className={className}>
      <div className="done-box">
        <div className="done-box-inner">
          <div className="done-item"><FaClone className="test" /> {doneStats.noOfMatches}</div>
          <div className="done-item"><FaTh /> {doneStats.noOfCards}</div>
          <br />
          <div className="done-item"><FaCheck /> {doneStats.noOfSuccesses}</div>
          <div className="done-item"><FaClose /> {doneStats.noOfFails}</div>
          <br />
          <div className="done-item"><FaClockO /> {time}</div>
          <span className="close-icon" onClick={onCloseDoneBoxClick}><FaClose /></span>
        </div>
      </div>
    </div> 
  );
};

const toWhole = x => (x ? Math.floor(x / 60) : 0);
const toRest = x => (x % 60);
const withPad = x => ('00'.substring(0, 2 - x.length) + x);

DoneBox.propTypes = {
  doneStats: PropTypes.object,
  onCloseDoneBoxClick: PropTypes.func.isRequired
};

export default DoneBox;