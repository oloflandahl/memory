import React from 'react';
import PropTypes from 'prop-types';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import './Input.css';

class CustomInput extends React.Component {

  onDecrement() {
    this.setValue(this.props.value - this.props.step);
  }

  onIncrement() {
    this.setValue(this.props.value + this.props.step);
  }

  setValue(value) {
    this.props.onChange({
      target: {
        value: value 
      }
    });
  }

  render() {
    return (
      <div className="input-container">
        <label>{this.props.header}</label>
        <div className="input-content">
          <span className="icon" onClick={this.onDecrement.bind(this)}><FaMinus /></span>
          <input type="number" value={this.props.value} onChange={this.props.onChange} min={this.props.min} max={this.props.max} step={this.props.step} readOnly />
          <span className="icon" onClick={this.onIncrement.bind(this)}><FaPlus /></span>
        </div>
      </div>
    );
  }
}

CustomInput.propTypes = {
  header: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CustomInput;