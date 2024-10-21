import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Filter = ({ threshold, setThreshold }) => {
  const handleChange = ({ target: { value } }) => {
    setThreshold(parseFloat(value) || 0);
  };

  return (
    <div className="filter">
      <label htmlFor="threshold">Filter by % change:</label>
      <input
        type="number"
        id="threshold"
        value={threshold}
        onChange={handleChange}
        min="0"
      />
    </div>
  );
};

Filter.propTypes = {
  threshold: PropTypes.number.isRequired,
  setThreshold: PropTypes.func.isRequired,
};

export default Filter;
