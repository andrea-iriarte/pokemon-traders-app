import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import { rarities } from './data/constants'
import Header from './components/Header';
import { motion } from 'framer-motion';


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
        const trainers = await fetch(`${apiURL}?q=supertype:trainer`);
        const trainersSet = await trainers.json();
        const energy = await fetch(`${apiURL}?q=supertype:energy`);
        const energySet = await energy.json();
        
        const result = await data.json();
        console.log(result);
        
        setCards([...result.data, ...trainersSet.data, ...energySet.data]);
        
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
    }, [search, []]) 
    console.log(cards)
  return (
    <div className='w-full h-[100vh] overflow-auto bg-gradient-to-b  via-purple-900 from-indigo-900 to-black flex  justify-items-start flex-wrap p-7 pb-[4rem]'>
      <Header setSearch={setSearch} />

      <div className='flex flex-wrap gap-6 justify-center'>
        {filteredResults.map((card) => (
          <motion.div
          whileHover={{ scale: [null, 1.1, 1.1]}}
          transition={{ duration: 0.3}}
          
          className=''
        >
          <PokemonCard card={card} key={card.id}/>
        </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default App


