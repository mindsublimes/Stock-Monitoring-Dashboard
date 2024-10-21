import React from 'react';
import PropTypes from 'prop-types';
import StockItem from '../StockItem';
import './index.scss';

const StockList = ({ stocks }) => (
    <div className="stock-list">
      {stocks.map(({ symbol, price, change }) => (
        <StockItem
          key={symbol}
          symbol={symbol}
          price={price}
          change={change}
        />
      ))}
    </div>
);

StockList.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      change: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StockList;
