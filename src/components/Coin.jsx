import React from 'react';
import './Coin.scss';

const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  console.log(name, price, symbol, marketcap, volume, image, priceChange, id);

  return (
    <div className="coin" key={`coin-${id}`}>
      <div className="coin__container">
        <img className="coin__image coin__item" src={image} alt="crypto icon" />
        <p className="coin__name bold coin__item">{name}</p>
        <p className="coin__symbol coin__item">{symbol}</p>
        <p className="coin__price coin__item">{price}</p>
        <p className="coin__volume coin__item">{volume.toLocaleString()}</p>

        {priceChange < 0 ? (
          <p className="coin__percent red coin__item">{priceChange.toFixed(2)}</p>
        ) : (
          <p className="coin__percent green coin__item">{priceChange.toFixed(2)}%</p>
        )}

        <p className="coin__marketcap coin__item">{marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
