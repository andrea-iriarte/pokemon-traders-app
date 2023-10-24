import { AiOutlineSearch } from 'react-icons/ai'
import  LoginButton  from './buttons/login-button'
import SignUpButton from './buttons/signup-button'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './buttons/logout-button'

const Header = ({ setSearch, setPage }) => {
    
  const reset = () => {
    setSearch('');
    setPage(1);
  }

  const { isAuthenticated } = useAuth0();
    
  return (
    
    <header className='h-[3rem] bg-black  bg-opacity-0 flex flex-col gap-4  justify-between items-center w-full    mb-[4rem] md:mb-4 '>

      <div className='flex justify-between w-full items-center'>
        <h1 className='text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400  
        via-purple-500 to-green-400 cursor-pointer tracking-tight ' onClick={reset}>
            Pokemon Traders
        </h1>
        <div className='flex gap-2'>
          {!isAuthenticated ? (
          <>
            <LoginButton />
            <SignUpButton />
          </>): (
          <>
            <LogoutButton />
          </>
          )}
         
        </div>
        
        
      </div>

      <div className='w-full flex md:justify-end justify-center'>
        <form action="" className='relative'>
            <input type="text" className='rounded-2xl bg-transparent border-2 border-opacity-10 border-green-300/50 w-[20rem] sm:w-[24rem] placeholder:text-green-300/40 placeholder:text-sm px-8 placeholder:font-light text-green-200/60 py-1 focus:border-purple-300/50 '
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
        

        
    </header>
    
  )
}

export default Header