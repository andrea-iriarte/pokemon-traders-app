
import  LoginButton  from './buttons/login-button'
import SignUpButton from './buttons/signup-button'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './buttons/logout-button'
import Search from './Search'
import SearchParameters from './SearchParameters'
const Header = ({ setSearch, setPage, setParameters, parameters }) => {
    
  const reset = () => {
    setSearch('');
    setPage(1);
  }

  const { isAuthenticated } = useAuth0();
    
  return (
    
    <header className=' mb-[4rem] h-[3rem] bg-black  bg-opacity-0 flex flex-col gap-4  justify-between items-center w-full md:mb-4 '>

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

      


        
    </header>
    
  )
}

export default Header