import React from 'react';
import Coin from './Coin';
import ClipLoader from 'react-spinners/ClipLoader';
import './CoinList.scss';

const CoinList = ({ filteredCoins, search }) => {
  return (
    <div className="coin-list">
      <div className="coin-list__key">
        <div></div>
        <div className="bold">Name (symbol)</div>
        <div className="bold">Price(£)</div>
        <div className="bold">Volume(£)</div>
        <div className="bold">Change</div>
        <div className="bold">Mkt Cap</div>
      </div>
      {filteredCoins == '' && search == '' ? (
        <div className="text-center mx-50">
          <ClipLoader color={'#7a02b2'} size={'75'} />
        </div>
      ) : (
        <></>
      )}
      {filteredCoins == '' && search != '' ? (
        <div className="mx-20">No cryptocurrencies found. Please try another search.</div>
      ) : (
        <></>
      )}
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
