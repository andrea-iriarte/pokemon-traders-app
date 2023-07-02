import {useState, useEffect} from 'react'
import { rarities, types, supertypes } from '../data/constants';
import { motion } from 'framer-motion'



const Type = ({ icon, color, type }) => {
    return (
        <div className={` rounded-full  flex gap-[0.2rem] items-center `}>
            <img src={icon} alt="" className='[h-[.75rem] w-[.75rem]' />
            <p className={`${color} italic font-semi`}>{type}</p>
        </div>
    )
}

const PokemonCard = ({ card }) => {
    return (
        <>
        { card && (   
            <motion.div
                whileHover={{ scale: [null, 1.1, 1.1]}}
                transition={{ duration: 0.3}}
            >
                <div className='flex  w-[20rem] h-[25rem] rounded-[10px] justify-around shadow-2xl p-10 bg-black bg-opacity-30 hover:bg-gradient-to-br hover:from-black hover:via-indigo-800 hover:to-pink-600 hover:shadow-4xl flex-col gap-3  ml-10 mt-5 hover:cursor-pointer'>
                    <div className='flex justify-between'>

                        <div>
                            <h2 className={`text-lg    text-gray-100 font-semibold`}>{card.supertype}</h2>

                            <p className='text-gray-400 text-sm'>
                                {card.subtypes[0]}
                            </p>
                        </div>
                        
                    
                        {card.cardmarket && <p className='text-gray-200 font-bold text-transparen bg-clip-text bg-gradient-to-br from-purple-600 to-purple-400 font-white'>{`$${card.cardmarket.prices.averageSellPrice}`}</p>
                    }
                    
                    </div>
                    
                    <div className={` rounded-[10px]  h-[70%]`}>
                    
                        <img src={card.images.small} alt="" className=' rounded-[10px] shadow-xl h-[100%] w-[100%]'/>
                    
                    </div>
                
                    <div className='flex justify-between items-center mb-[-.6rem]'>
                    
                        <h1 className='font-medium text-md text-gray-200'>
                        {card.name}
                        </h1>
                    
                        <div className={`flex items-center gap-1 bg-gradient-to-r ${rarities[card.rarity]} rounded-lg px-[.5rem] h-[1rem] py-[0.5rem] italic`}>
                    
                                <p className={`text-white  text-xs`}>{card.rarity}</p>
                    
                        </div>
                
                    </div>
            
                    <div className='flex justify-start gap-2.5'>
                        {card.types && card.types.map((type) => (
                            <div className='flex gap-2 items-center text-xs'>
                                <Type icon={types[type].icon} color={types[type].color} type={type}/>   
                            </div>
                    
                        ))}
                    </div>
                    
                </div>
            </motion.div>
            
            )} </>
    )
  }

  export default PokemonCard