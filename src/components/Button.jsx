
const Button = ({ label, color, handleClick }) => {
  return (
    <button onClick={handleClick} className={`border-[2px] rounded-2xl w-[5.5rem] border-green-400/50 text-green-400/70 h-[2rem] hover:cursor-pointer hover:bg-green-500/10`}>
        {label}
    </button>
  )
}

export default Button