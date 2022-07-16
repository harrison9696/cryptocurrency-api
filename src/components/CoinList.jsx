import React from 'react';
import Coin from './Coin';
import './CoinList.scss';

const CoinList = ({ filteredCoins }) => {
  return (
    <div className="coin-list">
      <Coin filteredCoins={filteredCoins} />
    </div>
  );
};

export default CoinList;
