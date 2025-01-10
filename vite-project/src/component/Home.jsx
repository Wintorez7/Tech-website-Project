import React, { useEffect, useState } from 'react'
import Coin from './Product'
import axios from 'axios'
import Loader from './Loader'

const Home = () => {
  const [coins , setCoins] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoins = async() => {    
      try {
        const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20');
        console.log(data)
        setCoins(data)
        setLoading(false)
      } catch (error) {
          alert("Not Working")
      }
    };
    fetchAllCoins();
  },[])

  return (
    <div className='flex flex-wrap'>
      
      {
        loading ? (<Loader/> ): 
          (coins.map(i => (
            <Coin name={i.name} symbol={i.symbol} imgSrc={i.image} price={i.current_price} key={i.id}/>
          )))
        
      } 
     
    </div>
  )
}

export default Home