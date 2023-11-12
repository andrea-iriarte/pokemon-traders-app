import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import SearchParameters from '../components/SearchParameters';
import pokemon from 'pokemontcgsdk'


const apiKey = 'fd75039a-5c0e-443f-8043-41195c20aad3';
pokemon.configure({apiKey: import.meta.env.POKEMON_API_KEY});

const Homepage = () => {

  const [cards, setCards] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(1);
  const [parameters, setParameters] = useState({
    supertype: "pokemon",
    type: null,
    subtype: null,
    rarity: null
  });
  const [search, setSearch] = useState('');

  const { supertype, type } = parameters;

 

  useEffect (() => {

    const query = `${parameters.type ? "types:".concat(parameters.type): ""} ${parameters.subtype ? "subtypes:".concat(parameters.subtype) : ""} ${parameters.rarity ? "rarity:".concat(parameters.rarity) : ""} ${parameters.supertype ? "supertype:".concat(parameters.supertype) : ""} `;
    const apiUrl = "https://api.pokemontcg.io/v2/cards?q=".concat(query);

    const apiRequest = async () => {
      const data = await pokemon.card.where({ q: query, pageSize: 24, page: page});
      //const data = fetch(apiUrl, apiKey)
      const result = data.data;
       setCards([...result]);
    }
    
    apiRequest();

    console.log(parameters.supertype);
    console.log(page);
  }, [page, supertype, type])
  

 useEffect(() => {
    const results = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

    setFilteredResults(results);
}, [search, page, supertype,]) 

  
    
  return (
    <div className='w-full h-[100vh] overflow-auto bg-gradient-to-b bg-blak via-purple-900 from-indigo-900 to-black flex  justify-start flex-wrap p-7 pb-[4rem]'>
      
      <Header setSearch={setSearch} setPage={setPage} setParameters={setParameters} parameters={parameters}/>
      
      <SearchParameters setParameters={setParameters} parameters={parameters} setPage={setPage} />

      <div className='flex flex-wrap gap-6 justify-center w-full'>
        {cards.length > 0 ? (cards.map((card) => (
          <PokemonCard card={card} key={card.id}/>
        ))) : (
          <p className='text-green-400/60'>No cards found.</p>
        )}
      </div>

      <Pagination page={page} setPage={setPage}/>
      
    </div>
  )
}

export default Homepage