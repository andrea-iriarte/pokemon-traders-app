import { RiArrowDropDownLine } from 'react-icons/ri'
import { searchParameters } from '../data/constants'
import { useState } from 'react'

const DropdownMenu = ({ param, setParameters, parameters, setPage }) => {
    
    const [isClicked, setIsClicked] = useState(false);
    
    
    const handleClick = (item) => {
        const newParams = parameters;
        newParams[param.name] = item;
        console.log(newParams);
        setParameters(newParams);
        //setPage(1);
        setIsClicked(false);
    }
    
    return(
        <div className='flex flex-col w-fit h-[4rem] gap-1 m-0'>
            <div className='border-green-400/40 border-[2px] w-[6rem] h-[2rem] rounded-2xl flex justify-between items-center text-green-400/60 pl-[.75rem]'>
                <h1 className='text-sm capitalize'>{parameters["supertype"]}</h1>
                <RiArrowDropDownLine 
                    onClick={() => setIsClicked(!isClicked)}
                    className={`text-2xl text-green-400/60 cursor-pointer ${isClicked ? 'rotate-180': ''}`}
                />
            </div>

            {isClicked && (
                <div className='h-fit py-[.5rem] px-[.5rem] w-[6rem] /* bg- teal-500/20 */ bg- gradient-to-br from-purple-700/40 to-blue-700/20 rounded-2xl border-green-400/30 border-[2px] bg-opacity-10 bg-black shadow-2xl'>
                    <ul className='flex flex-col gap-1'>
                        {param.variants.map((item) => (
                            <li key={item}className='text-sm text-green-400/70 border-green-400/20 cursor-pointer hover:text-white/60' onClick={() => handleClick(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const SearchParameters = ({ setParameters, parameters, setPage }) => {
  return (
    <div className='w-full h-[10rem]'>
       <DropdownMenu key={searchParameters[0].name} param={searchParameters[0]} setParameters={setParameters} parameters={parameters} setPage={setPage}/>
    </div>
  )
}

export default SearchParameters