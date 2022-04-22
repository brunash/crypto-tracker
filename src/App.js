import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import Coin from './components/Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const Api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(Api)
    .then(res => {
      setCoins(res.data)
     }).catch(error => console.log(error))
  },[]);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
       <div className='coin-app__header'>
         <h1>Search for a currency</h1>
         <form className='coin-app__form'>
           <input type='text' placeholder='Search' onChange={handleChange} className='coin-app__form--input'/>
         </form>
       </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;
