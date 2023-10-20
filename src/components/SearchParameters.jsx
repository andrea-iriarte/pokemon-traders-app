import {RiArrowDropDownLine} from 'react-icons/ri'
import { searchParameters } from '../data/constants'

const DropdownMenu = (param, parameters, setParameters) => {
    let isClicked = false;
    console.log(param);

    /* const handleClick = (item) => {
      let updatedParameter = {supertype: item};
      setParameters(...parameters, updatedParameter);
    } */
    return(
        <div className='flex flex-col w-[auto] h-[auto]'>
            <div className='flex gap-4 rounded-2xl text-green-400/30 h-[2rem] w-[4.5rem] border-green-400/40'>
                <h1>{param.parameter}</h1>
                <RiArrowDropDownLine  onClick={() => isClicked = !isClicked}
                    className={`${isClicked ? 'rotate-90' : '' }`}
                />
            </div>

            {/* { isClicked && 
                <div className='bg-black/10 h-[10rem] w-[7rem]rounded-[10px]'>
                    <ul>
                    {param.variants.map((item) => {
                        <li key={item} onClick={() => handleClick(item)}>
                            <p>{item}</p>
                        </li>
                    })}
                    </ul>
                </div>
            } */}
        </div>
    )
}

const SearchParameters = ({ setParameters, parameters }) => {
  return (
    <div className='w-full h-[4rem]'>
        {searchParameters.map((param) => (
            <DropdownMenu key={param.parameter} param={param} setParameters={setParameters} parameters={parameters}/>
        ))}
    </div>
  )
}

export default SearchParameters