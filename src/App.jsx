import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import { rarities } from './data/constants'


const apiKey = 'fd75039a-5c0e-443f-8043-41195c20aad3';
const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey
    }
}

const App = () => {


  const apiURL = "https://api.pokemontcg.io/v2/cards?q=rarity:rare"

  const [cards, setCards] = useState([]);

  useEffect(() => {

      const apiRequest = async () => {
        const data = await fetch(apiURL, options);
        
        const result = await data.json();
        console.log(result);
        
        setCards(result.data);
        
      }
      
      try {
        apiRequest();
      } catch(e){
        console.log(e.error.message);
      }
      
    }, [apiURL]);
    console.log(cards)
  return (
    <div className='w-full h-[100vh] overflow-auto bg-gradient-to-b  via-purple-900 from-pink-900 to-black flex  justify-items-start flex-wrap pb-[4rem]'>
      <div className='h-[3rem] bg-black  flex items-center w-full p-7 '>
        <h1 className='text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400  
        via-blue-400 to-purple-500 cursor-pointer '>Pokemon Traders</h1>
      </div>

      <div className='flex flex-wrap gap-1 justify-start'>
        {cards.map((card) => <PokemonCard card={card} key={card.id}/>)}
      </div>
      
    </div>
  )
}

export default App


