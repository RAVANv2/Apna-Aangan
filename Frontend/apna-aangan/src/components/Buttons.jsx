export const BlackPillButton = ({ children, className, ...rest }) => {
  return (
    <button 
    className = {`lg:flex 
      lg:ml-auto 
      lg:mr-3 
      py-2 px-10 
      bg-black 
      text-white 
      hover:bg-gray-100 
      hover:text-black 
      text-sm 
      rounded-full 
      transition 
      duration-200 
      ${className}`}>
      {children}
    </button>
  )
}