import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import { rarities } from './data/constants'
import Header from './components/Header';


const apiKey = 'fd75039a-5c0e-443f-8043-41195c20aad3';
const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey
    }
}

const App = () => {


  const apiURL = "https://api.pokemontcg.io/v2/cards"

  const [cards, setCards] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

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
      
    }, []);

    const [search, setSearch] = useState('');

    useEffect(() => {
        const results = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

        setFilteredResults(results);
    }, [search], []) 
    console.log(cards)
  return (
    <div className='w-full h-[100vh] overflow-auto bg-gradient-to-b  via-purple-900 from-pink-900 to-black flex  justify-items-start flex-wrap pb-[4rem]'>
      <Header setSearch={setSearch} />

      <div className='flex flex-wrap gap-1 justify-start'>
        {filteredResults.map((card) => <PokemonCard card={card} key={card.id}/>)}
      </div>
      
    </div>
  )
}

export default App


