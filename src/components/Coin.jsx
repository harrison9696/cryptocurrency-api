import React from 'react';
import './Coin.scss';

const Coin = ({ filteredCoins }) => {
  return <div className="coin" filteredCoins={filteredCoins}></div>;
};

export default Coin;
