import React from 'react';
import Coin from './Coin';
import './CoinList.scss';

const CoinList = ({ filteredCoins }) => {
  return (
    <div className="coin-list">
      <div className="coin-list__key">
        <div></div>
        <div className="bold">Name</div>
        <div className="bold">Symbol</div>
        <div className="bold">Price(£)</div>
        <div className="bold">Volume(£)</div>
        <div className="bold">Change</div>
        <div className="bold">Mkt Cap</div>
      </div>
      {filteredCoins != '' ? <div></div> : <div>Loading...</div>}
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
