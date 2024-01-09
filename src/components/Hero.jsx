import React from 'react'

const Hero = () => {
  return (
    <div id="home">
        <div>
            <div className='w-full h-[100vh]'>
                <img className=' left-0 w-full h-[100vh] object-cover absolute blur-sm' src="images/wewe.png" alt="" />
                <div id="text-home" className='max-w-[1200px] h-[100vh] w-full m-auto flex flex-col justify-center items-center '>
                    <div>
                        <h1 className='text-white text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-semibold relative font-Ephesis '>Welcome to the</h1>
                    </div>
                    <div>
                        <h4 className='text-white text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold relative font-Ephesis'>Summit of Relaxation</h4>
                    </div>
                    <p className='text-[8px] md:text-sm lg:text-lg text-white font-semibold relative'>BREATH IN ALTITUDE - EXHALE YOUR WORRIES</p>
                    
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Hero