import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Pagination = ({ page, setPage }) => {
  return (
    <div className='mt-[2rem] w-[100vw] h-[2rem] overflow-visible text-green-400/60 flex justify-center items-center gap-[2rem]'>
        <AiOutlineArrowLeft href="#top"
        onClick={() => {
            setPage(page > 1 ? page - 1 : 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
        
        className={`cursor-pointer ${page === 1 ? 'text-green-400/20 cursor-default' : ''}`}/>
        <p>{page}</p>
        <AiOutlineArrowRight href="#top"
        onClick={() => {
            setPage(page + 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            }
        }
            className='cursor-pointer'/>
    </div>
  )
}

export default Pagination