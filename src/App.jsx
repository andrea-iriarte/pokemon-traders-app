import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import Pagination from './components/Pagination';
import Header from './components/Header';
import SearchParameters from './components/SearchParameters';
import pokemon from 'pokemontcgsdk'


const apiKey = 'fd75039a-5c0e-443f-8043-41195c20aad3';
const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey
    }
}

pokemon.configure({apiKey: apiKey});

const App = () => {

  const [cards, setCards] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(1);
  const [parameters, setParameters] = useState({
    supertype: "pokemon",
    type: null
  });
  const [search, setSearch] = useState('');

  useEffect (() => {

    const apiRequest = async () => {
      const data = await pokemon.card.where({ q: 'supertype:'.concat(parameters.supertype), pageSize: 24, page: page});
      const result = data.data;
       setCards([...result]);
    }
    
    apiRequest();

    console.log(parameters.supertype);
    console.log(page);
  }, [page, parameters.supertype])
  
  useEffect(() => {
      const results = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

      setFilteredResults(results);
  }, [search, page, parameters.supertype]) 

  
    
  return (
    <div className='w-full h-[100vh] overflow-auto bg-gradient-to-b  via-purple-900 from-indigo-900 to-black flex  justify-start flex-wrap p-7 pb-[4rem]'>
      
      <Header setSearch={setSearch} setPage={setPage}/>
      
      <SearchParameters setParameters={setParameters} parameters={parameters} setPage={setPage} />

      <div className='flex flex-wrap gap-6 justify-center'>
        {filteredResults ? (filteredResults.map((card) => (
          <PokemonCard card={card} key={card.id}/>
        ))) : (
          cards.map((card) => (
            <PokemonCard card={card} key={card.id}/>
          ))
        )}
      </div>

      <Pagination page={page} setPage={setPage}/>
      
    </div>
  )
}

export default App


