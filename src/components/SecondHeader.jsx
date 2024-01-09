import React from 'react'

const SecondHeader = () => {
  return (
    <div id='about' className=' py-[50px] xl:py-[150px] sm:mx-[50px] p-5 xl:p-[5vw] 2xl:pt-[20vh] '>
            <div className='justify-center items-center  flex flex-col 2xl:flex-row sm:pt-[20px] '>
                <div className='max-w-[100vw] p-5 '>
                    <h4 className='text-sm md:text-xl font-semibold mb-2 outline-red'>ABOUT US</h4>
                    <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-6xl font-bold mb-5  text-green-500'>Escape to Nature's Paradise: Where Tranquility and Beauty Unite</h2>
                    <p className='text-sm md:text-md lg:text-lg '>  - Paradise Hills Mountain Resort is the newest mountain resort
                        that will surely attract thousand of people, especially 
                        this summer station. With its lush greenery, hills landscape
                        , and magnifiecient mountain views, Paradise Hills Mountaind 
                        Resort is the perfect place to take a break, from the hustle 
                        and bustle of city life. It really lives up to its name as it
                        is a rejuvenating and refreshing oasis in Brgy. Buluang, 
                        Compostela, Cebu.</p>
                </div>
                    <div className='max-w-100 '>
                        <img className=' lg:max-w-[70vh] bg-center shadow-2xl rounded-lg 2xl:ml-20' src="images/pic-1.jpg" alt="" />
                    </div>
            </div>
    </div>
  )
}

export default SecondHeader