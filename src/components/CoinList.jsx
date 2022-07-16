import React from 'react';
import Coin from './Coin';
import './CoinList.scss';

const CoinList = ({ filteredCoins }) => {
  return (
    <div className="coin-list">
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
