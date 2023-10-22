
const Button = ({ label, color, handleClick }) => {
  return (
    <button className={`border-[2px] rounded-2xl w-[6rem] border-green-400/50 text-green-400/70 h-[2.25rem] hover:cursor-pointer hover:bg-green-500/10`}>
        {label}
    </button>
  )
}

export default Button