import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import CoinList from './components/CoinList';
import './App.scss';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=200&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        console.log(coins);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mx-50">Cryptocurrencies</h1>
        <Search handleChange={handleChange} />
        <CoinList filteredCoins={filteredCoins} search={search} />
      </div>
    </div>
  );
}

export default App;
