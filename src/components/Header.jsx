import { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({ setSearch }) => {
    
        
    
  return (
    
    <header className='h-[3rem] bg-black  bg-opacity-0 flex justify-between items-center w-full mb-7 '>
        <h1 className='text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400  
        via-purple-500 to-green-400 cursor-pointer text-gray-100 tracking-tight'>
            Pokemon Traders
        </h1>

        <form action="">
            <input type="text" className='rounded-2xl bg-transparent border-2 border-opacity-10 border-purple-300/30 w-[24rem] placeholder:text-purple-100/40 placeholder:text-sm px-3 placeholder:font-light text-white/60 py-1 focus:border-purple-300/50'
            placeholder='Search your pokemons '
            onChange={(e) => setSearch(e.target.value)}/>

            
             
        </form>
    </header>
    
  )
}

export default Header