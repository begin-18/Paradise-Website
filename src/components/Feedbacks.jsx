import React from 'react'
import {FaCheck, FaStar} from 'react-icons/fa'

const Feedbacks = () => {
  return (
    <div className='bg-green-500 p-5 mx-[5vw] md:mx-[10vw] sm:py-[10vh] rounded-lg'>
        <div className='flex flex-col 2xl:flex-row'>
        
        <div className='flex flex-col gap-5 lg:flex-row items-center justify-center p-2'>
            <div className='max-w-[80vw] lg:max-w-[50vw] bg-white rounded-lg hover:scale-105 duration-300'>
                <div className=' flex items-center'>
                    <img src="images/kevin.jpg" alt="" className='object-cover w-[80px] rounded-full m-2'/>
                    <div>
                        <h1 className='flex items-center text-sm font-semibold'>Kevin Peter Adya <FaCheck className='bg-gray-300 rounded-full p-1 m-2 '/></h1>
                        <span className='flex gap-2'><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/></span>
                    </div>
                </div>
                <hr />
                <div className='p-5'>
                    <p>"The resort exceeded all expectations with its stunning scenery and impeccable service. 
                        Every moment felt like a luxurious escape, creating unforgettable memories that will 
                        keep us coming back for more."</p>
                </div>
            </div>
            <div className='max-w-[80vw] lg:max-w-[50vw] bg-white rounded-lg hover:scale-105 duration-300'>
                <div className=' flex items-center '>
                    <img src="images/wendell.jpg" alt="" className='object-cover w-[80px] rounded-full m-2'/>
                    <div>
                        <h1 className='flex items-center text-sm font-semibold'>Wendell Damayo <FaCheck className='bg-gray-300 rounded-full p-1 m-2'/></h1>
                        <span className='flex gap-2'><FaStar className='text-yellow-500'/><FaStar className='text-gray-500'/><FaStar className='text-gray-500'/><FaStar className='text-gray-500'/><FaStar className='text-gray-500'/></span>
                    </div>
                </div>
                <hr />
                <div className='p-5  '>
                <p>"The resort exceeded all expectations with its stunning scenery and impeccable service. 
                        Every moment felt like a luxurious escape, creating unforgettable memories that will 
                        keep us coming back for more."</p>
                </div>
            </div>
            <div className='max-w-[80vw] lg:max-w-[50vw] bg-white rounded-lg hover:scale-105 duration-300'>
                <div className=' flex items-center '>
                    <img src="images/kennan.jpg" alt="" className='object-cover w-[80px] h-[80px] rounded-full m-2'/>
                    <div>
                        <h1 className='flex items-center text-sm font-semibold'>Kennan Son <FaCheck className='bg-gray-300 rounded-full p-1 m-2'/></h1>
                        <span className='flex gap-2'><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/></span>
                    </div>
                </div>
                <hr />
                <div className='p-5'>
                    <p>"The resort exceeded all expectations with its stunning scenery and impeccable service. 
                        Every moment felt like a luxurious escape, creating unforgettable memories that will 
                        keep us coming back for more."</p>
                </div>
            </div>
         
         
          
        </div>
        
        <div className='flex justify-center items-center p-5'>
                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Send us a feedback</label>
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="6" placeholder='Write Here....' class="block w-[60vw] lg:w-[25vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about experience.</p>
                    <button className='px-3 py-2 bg-green-800 text-white rounded-xl  my-3 hover:bg-white hover:text-green-600'>Send Message</button>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Feedbacks