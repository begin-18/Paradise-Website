import React, {useState} from 'react'
import { data } from '../data/DataImages.js'

const Page1 = () => {
    const [gallery, setgallery] = useState(data);
    const filterType = (category) => {
        setgallery(
            data.filter((item) => {
                return item.category === category
            })
        )
    }
  return (
        <div id="gallery"className=' p-5 sm:p-20 lg:mx-[10vh]'>
           
            <div className='py-[50px] flex flex-col sm:flex-row items-center'>
                
            <h1 className='flex items-center  md:mr-10 text-2xl lg:text-4xl font-bold p-3'>GALLERY</h1>
                <div className='flex gap-2 sm:gap-5 items-center justify-center'>
                    <h4 onClick={() => setgallery(data)} className=' bg-green-400 cursor-pointer text-[12px] md:text-sm  px-3 py-2 rounded-lg font-semibold hover:text-white' >ALL</h4>
                    <h4 onClick={() => filterType('Pool')} className='bg-green-400  cursor-pointer text-[12px]  md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>ADULT</h4>
                    <h4 onClick={() => filterType('kPool')} className='bg-green-400  cursor-pointer text-[12px]  md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white' >KIDS</h4>
                    <h4 onClick={() => filterType('Cottage')} className='bg-green-400  cursor-pointer text-[12px]  md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white' >COTTAGE</h4>

                </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4'>
                {gallery.map((item, index) =>(
                    <div key={index} className='border shadow-2xl hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name}  className='w-full h-[200px] object-cover'/>
                        <div className='flex justify-between px-2 py-4 '>
                            <p className='font-bold text-black '>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
  )
}

export default Page1