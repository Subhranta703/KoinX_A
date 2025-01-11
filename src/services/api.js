import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchBitcoinPrices = () =>
  axios.get(`${BASE_URL}/simple/price`, {
    params: { ids: 'bitcoin', vs_currencies: 'usd,inr', include_24hr_change: true },
  });

export const fetchTrendingCoins = () =>
  axios.get(`${BASE_URL}/search/trending`);
