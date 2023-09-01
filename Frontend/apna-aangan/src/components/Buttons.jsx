export const BlackPillButton = ({ children, className, targetRef, ...rest }) => {

  const handelScroll = () => {
    if(targetRef.current){
      targetRef.current.scrollIntoView({
        behavior:'smooth',
      })
    }
  }

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
      ${className}`}
      onClick={handelScroll}>
      {children}
    </button>
  )
}