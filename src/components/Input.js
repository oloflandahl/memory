import React from 'react';
import PropTypes from 'prop-types';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import './Input.css';

const CustomInput = ({ref, defaultValue, min, max, step, onChange}) => {
  return (
    <div class="input-container">
      <span class="icon"><FaMinus /></span>
      <input type="number" defaultValue={defaultValue} onChange={onChange} min={min} max={max} step={step} />
      <span class="icon"><FaPlus /></span>
    </div>
  );
};

CustomInput.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CustomInput;