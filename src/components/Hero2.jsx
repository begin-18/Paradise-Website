import React from 'react'
import {FaLongArrowAltRight,  } from 'react-icons/fa'


const Hero2 = () => {
  return (
    <div id='direction' className='mx-[2vw] lg:mx-[10vw] my-10'>
        <div className='px-[5vw] pt-20 pb-10'>
            <div className='flex flex-col justify-normal items-center'>
                <div className='px-5 py-[2rem] lg:py-[5rem]'>
                    <h1 className='font-Poppins font-semibold'> HOW TO GET THERE <span className='text-red-700'>?</span></h1>
                    <h4 className='flex text-2xl sm:text-3xl md:text-4xl mb-5 text-green-700'><FaLongArrowAltRight className='mr-2 text-green-500'/> Baranggay Buluang, Compostela Cebu </h4>
                    <p className='flex text-gray-700 text-[12px] sm:text-xl font-bold'> Just a few meters from the entrance of Q-Parks Calvary, More or less than 1 hour travel from the city.</p>
                </div>
                <div>
                    <div className='flex flex-col xl:flex-row mb-10'>
                        <div className='duration-200 hover:scale-105 flex justify-center items-center'>
                            <img src="images/car-image.webp" alt="" className='hover:scale-100 duration-300 h-[20vh] sm:h-[20vh] w-[60vw] object-cover shadow-2xl rounded-lg'/>
                        </div>
                        <div className='flex flex-row xl:flex-col justify-center items-center mt-5 px-5'>
                                <div>
                                    <h1 className='text-5xl w-[10vw] sm:w-[5vw] text-center shadow-2xl bg-green-500 rounded-full mb-5 text-white'>1</h1>
                                </div>
                            <div className='ml-5'>
                            <p className='flex text-[13px] sm:text-lg  text-gray-700'>Vhire going to Danao ETT: 1 hour and 10 minutes Fare:P50 or jeep going to Danao (27 = Jeep Number) Fare: P20-25 just tell the driver to drop you off at "SKINA BULUANG". <br /> <br /></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex my-10 flex-col xl:flex-row'>
                            <div className='duration-200 hover:scale-105 flex justify-center items-center'>
                                <img src="images/buluang.png" alt="" className='hover:scale-100 duration-300 h-[20vh] sm:h-[20vh] w-[60vw] object-cover shadow-2xl rounded-lg'/>
                            </div>
                            <div className='flex flex-row xl:flex-col items-center px-5 mt-5'>
                                <div>
                                    <h1 className='text-5xl  w-[10vw] sm:w-[5vw] text-center shadow-2xl bg-green-500 rounded-full mb-5 text-white'>2</h1>
                                </div>
                                <div className='ml-2'>
                                     <p className='flex text-[13px] sm:text-lg  text-gray-700'>From there, there are motorbikes or habal-habal and tricycles at the skina, tell them that you're going to Paradise Hills and Mountain Resort. Fare is P10-20 per head. <br /> <br /></p>
                                </div>
                                
                            </div>
                           
                    </div>
                    <hr />
                    <div className='flex my-10 flex-col xl:flex-row'>
                        <div className='duration-200 hover:scale-105 flex justify-center items-center'>
                            <img src="images/entrance.png" alt="" className='hover:scale-100 duration-300 h-[20vh] sm:h-[20vh] w-[60vw] xl:w-[80vw] object-cover shadow-2xl rounded-lg'/>
                        </div>
                        <div className='flex flex-row xl:flex-col items-center px-5 mt-10 gap-2'>
                                <div>
                                    <h1 className='text-5xl w-[10vw] sm:w-[5vw] text-center shadow-2xl bg-green-500 rounded-full mb-5 text-white'>3</h1>
                                </div>
                                <div>
                                    <p className='flex text-[13px] sm:text-lg text-gray-700'>If you'are bringing your own vehicle, just navigate via Waze and Search for "Q-Park Compostela". Once you have reached to the destination, you can ask around for the directions for Paradise Hills and Mountain Resort. <br /> <br /></p>
                                </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iframe title='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2589684949053!2d124.00347130000003!3d10.48023980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9bb7d88cb2501%3A0x5284b1091a28be59!2sParadise%20Hills%20Mountain%20Resort!5e0!3m2!1sen!2sph!4v1703738888110!5m2!1sen!2sph" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
  )
}

export default Hero2
