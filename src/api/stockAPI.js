import axios from 'axios';

const API_KEY = 'csb1qvpr01qobflkgnagcsb1qvpr01qobflkgnb0'; // Replace with your Finnhub API Key
const API_URL = 'https://finnhub.io/api/v1/quote';
const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NFLX', 'NVDA', 'FB', 'BABA', 'V'];

const fetchStockDataForSymbol = async (symbol) => {
    const response = await axios.get(`${API_URL}?symbol=${symbol}&token=${API_KEY}`);
    const { c: currentPrice, pc: previousClose } = response.data;

    return {
        symbol,
        price: currentPrice,
        change: ((currentPrice - previousClose) / previousClose) * 100, // Percentage change
    };
};

export const fetchStockData = async () => {
    try {
        const stockPromises = symbols.map(fetchStockDataForSymbol);
        return await Promise.all(stockPromises);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return [];
    }
};
