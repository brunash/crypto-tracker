import React from "react";
import './Coin.scss'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div>
            <div>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p>{symbol}</p>
            </div>
            <div>
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