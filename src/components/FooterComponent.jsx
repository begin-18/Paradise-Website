import React from 'react'
import { FaFacebook, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'

const FooterComponent = () => {
  return (
   <div className='bg-gradient-to-r from-cyan-500 to-green-500' >
        {/* <div className='absolute'>
            <img src="images/bg-img.png" alt="" className='w-[100vw]' />
        </div> */}
        <div className='flex flex-col lg:flex-row mx-[5vw] md:mx-[10vw] justify-evenly py-[7vh] gap-5'>
            <div className='w-full lg:w-[20vw]'>
                <h1 className='text-center text-md font-semibold mb-5 sm:text-lg'>PARADISE HILLS AND MOUNTAIN RESORT</h1>
                <p className='font-semibold flex text-[12px] sm:text-sm text-center'><span><FaQuoteLeft className='mr-4'/></span>Discover bliss at Paradise Mountain Hill Resort, where luxury meets altitude, and every moment is a summit of perfection <span className='relative top-[40px] '><FaQuoteRight className='ml-4'/></span></p>
                
            </div>

            <div>
                <ul>
                    <li className='p-1 md:text-lg hover:text-white font-semibold hover:border-b-[5px] duration-200'><a href="#home">Home</a></li>
                    <li className='p-1 md:text-lg hover:text-white font-semibold hover:border-b-[5px] duration-200'><a href="#about">About Us</a></li>
                    <li className='p-1 md:text-lg hover:text-white font-semibold hover:border-b-[5px] duration-200'><a href="#gallery">Gallery</a></li>
                    <li className='p-1 md:text-lg hover:text-white font-semibold hover:border-b-[5px] duration-200'><a href="/">Book Now</a></li>
                </ul>
            </div>
            <hr />
            <div className='flex flex-col items-center'>
                <h5 className='text-xl font-bold'>SOCIAL MEDIA</h5>
                <p className='flex text-[14px] sm:text-sm hover:border-b-[2px] duration-300'><FaFacebook className='size-[15px] sm:size-[20px] mr-2' /> <a href="https://www.facebook.com/paradisehillsandmountainresort">Paradise Hills And Mountain Resort</a></p>
            </div>
            <div>
                <h1 className='py-1 font-semibold cursor-pointer md:text-2xl'>Contact Us</h1>
                <div>
                    <h2 className='py-1  hover:text-white cursor-pointer hover:border-b-[5px] duration-200'>0922-371-0036</h2>
                    <h2 className='py-1  hover:text-white cursor-pointer hover:border-b-[5px] duration-200'>(032) 382-5215</h2>
                </div>
            </div>
           
          
            
        </div>
        <hr />
        <p className='text-center py-2'>@2023 All rights recieved</p>
   </div>
  )
}

export default FooterComponent

 