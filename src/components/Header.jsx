
import  LoginButton  from './buttons/login-button'
import SignUpButton from './buttons/signup-button'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './buttons/logout-button'
import Search from './Search'
import SearchParameters from './SearchParameters'
import { AiOutlineMenu } from 'react-icons/ai'
const Header = ({ setSearch, setPage, setParameters, parameters }) => {
    
  const reset = () => {
    setSearch('');
    setPage(1);
  }

  const { isAuthenticated } = useAuth0();

  const menuIsClicked = false;
    
  return (
    
    <header className=' mb-[4rem] h-[3rem] bg-black  bg-opacity-0 flex flex-col gap-4  justify-between items-center w-full md:mb-4 '>

      <div className='flex justify-between w-full items-center'>
        <h1 className='text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400  
        via-purpl-500  to-green-400 cursor-pointer tracking-tight ' onClick={reset}>
            Pokemon Traders
        </h1>
        <div className='sm:flex gap-2  hidden'>
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

        <div className='sm:hidden flex flex-col  w-[2.5rem] rounded-full hover:bg-green-400/10 items-center justify-center'>
            <AiOutlineMenu 
              className='text-green-400/70 text-2xl cursor-pointer'
              onClick={() => menuIsClicked = !menuIsClicked}
            />

           {menuIsClicked && 
            <div>
              {isAuthenticated ? (
                <>
                  <SignUpButton />
                  <LoginButton />
                </>
              ) : (
                <>
                  <LogoutButton />
                </>
              )}
            </div>
          }
        </div>
        
        
      </div>

      


        
    </header>
    
  )
}

export default Header