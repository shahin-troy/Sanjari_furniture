/* eslint-disable react/prop-types */

export default function HamburgerMenu({isOpen,setIsOpen}) {
  return (
    <div className={`${isOpen ? 'open -top-2 outline outline-offset-[6px] outline-red-500 outline-2 left-2' : ''} icon nav-icon-5 ml-3  rounded-full`} onClick={() => setIsOpen(!isOpen)}>
      <span className={`${isOpen && '!bg-red-600'}`}></span>
      <span></span>
      <span className={`${isOpen && '!bg-red-600'}`}></span>
    </div>
  )
}
