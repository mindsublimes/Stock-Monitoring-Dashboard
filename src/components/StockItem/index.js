import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const StockItem = ({ symbol, price, change }) => {
  const changeClass = change > 0 ? 'positive' : 'negative';
  const formattedPrice = price.toFixed(2);
  const formattedChange = change.toFixed(2);

  return (
    <div className={`stock-item ${changeClass}`}>
      <div className="stock-symbol">{symbol}</div>
      <div className="stock-price">${formattedPrice}</div>
      <div className={`stock-change ${changeClass}`}>
        {formattedChange}%
      </div>
    </div>
  );
};

StockItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};

export default StockItem;
