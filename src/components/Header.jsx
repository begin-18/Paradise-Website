import React , {useState}from 'react'
import {FaBars, FaArrowRight} from 'react-icons/fa'

const Header = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className='animation flex justify-between xl:px-[10rem] fixed z-10 bg-white w-full shadow-2xl '>
        <div id="header" className='flex justify-evenly items-center h-[7vh] sm:h-[10vh] gap-2'>
            <div  className='flex items-center justify-center'>
                <img className='w-[40px] md:w-[70px] mx-2 sm:mx-5' src="images/logo.png" alt="" />
            </div>
            <div className='flex flex-col text-center'>
                <div className='flex items-center justify-center mt-5'>
                    <h1 className='text-[10px] sm:text-sm md:text-md lg:text-lg font-semibold font-Poppins'>PARADISE HILLS AND MOUNTAIN</h1>
                </div>
                <div className='text-center'>
                    <h2 className=' text-[1.2rem] sm:text-[3rem] sm:-mt-5 font-sm font-Ephesis'>Resort</h2>
                </div>
            </div>
        </div>
        <nav id="nav" className='flex align-middle'>
            <div onClick = {()=> setNav(!nav)}className='lg:hidden'>
                <button className='mt-5 px-2 sm:px-5 text-[20px] sm:text-[30px]'><FaBars /></button>
            </div>
            <ul className=' md:gap-[3rem] hidden lg:flex justify-center items-center'>
                <li><a className="text-black font-semibold md:text-md lg:text-[1rem]" href="#about">ABOUT US</a></li>
                <li><a className="text-black font-semibold md:text-md lg:text-[1rem]" href="#rates">RATES</a></li>
                <li><a className="text-black font-semibold md:text-md lg:text-[1rem]" href="#direction">DIRECTION</a></li>
                <div className='flex fle-col'>
                    <span className='bg-red-500 p-1 w-3 rounded-lg h-3 absolute ml-[6.5rem] -mt-1 animate-ping opacity-75'></span>
                    <span className='bg-red-500 p-1 w-3 rounded-lg h-3 absolute ml-[6.5rem] -mt-1'></span>
                <button className='px-3 py-2 bg-green-400 rounded-md text-[1rem]'><a href="#booking">BOOK NOW</a></button>
                </div>
                
            </ul>
        </nav>
        {/* {overlay} */}
        {nav?  <div className='bg-black/40 fixed w-full h-screen z-10 top-0 right 0'></div> : ''}
    
        {/* {side-drawer} */}
        <div className={ nav ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' : 'hidden'}>
            <FaArrowRight onClick = {() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-xl p-4 font-semibold'>MENU</h2>
            <nav className=' flex items-center justify-center mt-5'>
                <ul>
                    <li className='mb-5 text-md font-semibold hover:bg-gray-200 px-7'><a className=' text-black   py-2 flex' href="#home">HOME</a></li>
                    <li className='mb-5 text-md font-semibold hover:bg-gray-200 px-7'><a className=' text-black   py-2 flex' href="#about"> ABOUT</a></li>
                    <li className='mb-5 text-md font-semibold hover:bg-gray-200 px-7'><a className=' text-black   py-2 flex' href="#rates"> RATES</a></li>
                    <button className='px-3 py-2 bg-green-400 rounded-md text-[1rem]'><a href="#booking">BOOK NOW</a></button>
                </ul>

            </nav>
        </div>
    </div>
  )
}

export default Header