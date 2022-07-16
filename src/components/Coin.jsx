import React from 'react';
import './Coin.scss';

const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
  console.log(name, price, symbol, marketcap, volume, image, priceChange);

  return (
    <div className="coin">
      <p>{name}</p>
    </div>
  );
};

export default Coin;
