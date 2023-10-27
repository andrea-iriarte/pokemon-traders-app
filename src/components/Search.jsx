import { AiOutlineSearch } from 'react-icons/ai'

const Search = ({ setSearch }) => {
  return (
    <div className='w-full flex md:justify-end justify-center'>
        <form action="" className='relative'>
            <input type="text" className='rounded-2xl bg-transparent border-2 border-opacity-10 border-green-400/40 w-[20rem] sm:w-[20rem] placeholder:text-green-400/60 placeholder:text-sm px-8 placeholder:font-light text-green-200/60 py-1 focus:border-purple-300/50 '
            placeholder='Search your pokemons '
            onChange={(e) => setSearch(e.target.value)}/>

            <AiOutlineSearch style={{
                position: 'absolute',
                color: 'rgb(134 239 172 / 0.4)',
                top: '.6rem',
                left: '.75rem'

                

            }}/>
             
        </form>
      </div>
  )
}

export default Search