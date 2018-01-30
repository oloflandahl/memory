import React from 'react';
import PropTypes from 'prop-types';
import './DoneItem.css';

const DoneItem = ({ children, area, color, text }) => {
  const areaStyle = { 
    gridArea: area,
    color: color
  };
  return (
    <div className='done-item' style={areaStyle}>{children} <span className="done-item-text">{text}</span></div>
  );
};

DoneItem.propTypes = {
  area: PropTypes.string.isRequired,
  text: PropTypes.any.isRequired
};

export default DoneItem;