import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import pokemon from 'pokemontcgsdk'


const DropdownMenu = ({ param, setParameters, parameters, setPage }) => {
    
    const [isClicked, setIsClicked] = useState(false);
    
    
    const handleClick = (item) => {
        const newParams = parameters;
        if(item === "- - - - -") {
            item = null;
        } else {
            item = item.replace(" ", "");
            item = item.toLowerCase();
        }
        newParams[param.name] = item;
        console.log(newParams);
        setParameters(newParams);
        console.log(param);
        setPage(1);
        setIsClicked(false);
    }
    
    return(
        <div className='flex flex-col w-fit h-[9rem] overflow-y-visible gap-1 m-0'>
            <div className='border-green-400/40 border-[2px] w-fit h-[2rem] rounded-2xl flex justify-between items-center text-green-400/60 pl-[.75rem]'>
            {parameters[param.name] ? (
                        <h1 className='text-sm capitalize'>{parameters[param.name]}</h1> 
                    ) : (
                        <h1 className='text-sm capitalize'>{param.name}</h1> 
                    )
                }
                <RiArrowDropDownLine 
                    onClick={() => setIsClicked(!isClicked)}
                    className={`text-2xl text-green-400/60 cursor-pointer ${isClicked ? 'rotate-180': ''}`}
                />
            </div>

            {isClicked && (
                <div className='h-fit  overflow-y-scroll py-[.5rem] px-[.5rem] w-fit /* bg-teal-50020 */ bg- gradient-to-br from-purple-700/40 to-blue-700/20 rounded-2xl border-green-400/30 border-[2px] bg-opacity-10 bg-black shadow-2xl'>
                    <ul className='flex flex-col gap-1'>
                        {param.variants.map((item) => (
                            <li key={item} className='text-sm text-green-400/70 border-green-400/20 border-b-[1px] cursor-pointer hover:text-white/60' onClick={() => handleClick(item)}>
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

    const [searchParameters, setSearchParameters] = useState([]);

useEffect(() => {

    const getParameterTypes = async () => {
        try {
            const subtypes = await pokemon.subtype.all();
            const types = await pokemon.type.all();
            const supertypes = await pokemon.supertype.all();
            const rarities = await pokemon.rarity.all();
    
            const searchParams = [
                {
                    name: "supertype",
                    variants: ["- - - - -", ...supertypes]
                },
                {
                    name: "subtype",
                    variants: ["- - - - -", ...subtypes]
                },
                {
                    name: "type",
                    variants: ["- - - - -", ...types]
                },
                {
                    name: "rarity",
                    variants: ["- - - - -", ...rarities]
                },
            ]
    
            setSearchParameters([...searchParams]);
        } catch (e) {
            console.log(e);
        }

    }

    getParameterTypes();
    
}, [])
  return (
    <div className='w-full h-[10rem] flex gap-3 mt-0 pt-0 sm:overflow-x-visible overflow-x-auto sm:justify-start justify-center'>
       { 
            searchParameters.map((item) => (
                <DropdownMenu key={item.name} param={item} setParameters={setParameters} parameters={parameters} setPage={setPage} />
            ))
       }
    </div>
  )
}

export default SearchParameters