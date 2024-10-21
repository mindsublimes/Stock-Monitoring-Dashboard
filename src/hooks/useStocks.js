import { useState, useEffect } from 'react';
import { fetchStockData } from '../api/stockAPI';

const useStocks = () => {
  const [state, setState] = useState({
    stocks: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await fetchStockData();
        setState({ stocks: stockData, loading: false, error: null });
      } catch (err) {
        console.error(err)
        setState({ stocks: [], loading: false, error: 'Failed to load stock data' });
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useStocks;
