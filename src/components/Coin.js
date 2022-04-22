import React from "react";
import './Coin.scss'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-name">
                <img src={image} alt='crypto' className="coin-name__image"/>
                <h2>{name}</h2>
                {/* <p>{symbol}</p> */}
            </div>
            <div className="coin-info">
                <p>${price}</p>
                <p>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                }
                <p>Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Coin;