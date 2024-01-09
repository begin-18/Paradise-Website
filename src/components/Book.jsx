import React from 'react';
import { FaFacebook } from 'react-icons/fa';


const Book = () => {
  return (
    <div id="booking" className='flex flex-col justify-center items-center gap-10 py-10 lg:py-[10vh] bg-green-500'>
      <div className='flex flex-col w-full items-center'>
        <div className='rounded-lg flex flex-col justify-center items-center p-5  w-full'>
          <form className='w-full max-w-md bg-white p-5 rounded-lg'>
            <label className='w-full flex flex-col gap-3'>
              <h1 className='text-center'>Personal Information</h1>
              <div className='flex flex-col gap-3'>
                <input type="text" placeholder="First Name" className='p-2 border rounded-md' />
                <input type="text" placeholder="Last Name" className='p-2 border rounded-md' />
                <input type="email" placeholder="Email" className='p-2 border rounded-md' />
                <input type="text" placeholder="Phone number" className='p-2 border rounded-md' />
              </div>
              <hr />
              <h1 className='text-center'>Form</h1>
              <div className='flex flex-col gap-3'>
                <input type="number" placeholder="Adults" className='p-2 border rounded-md' />
                <input type="number" placeholder="Kids" className='p-2 border rounded-md' />
                <select name="Select" className='p-2 border rounded-md'>
                  <option value="">Select Tables</option>
                  <option value="1">Tables</option>
                  <option value="2">Cottage</option>
                  <option value="3">Mushroom Tables</option>
                  <option value="4">Tent</option>
                </select>
                <select name="Select" className='p-2 border rounded-md'>
                  <option value="">How many?</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <button className='text-white text-xl font-semibold bg-green-800 px-3 py-2 rounded-lg hover:bg-white hover:text-green-600 duration-300 mt-5'>BOOK NOW</button>
              <p className='text-center'>Enjoy your day!</p>
            </label>
          </form>
        </div>
        <div className='mb-5 px-5 text-center xl:w-[50%]'>
          <h5>Your information is secure with us, and you'll receive a confirmation email within 24 hours. For any special requests or assistance, feel free to ask us on our social media accounts below.</h5>
          <div className='flex flex-col items-center lg:flex-row gap-3 m-4 justify-center'>
            <span className='flex text-[12px] sm:text-sm hover:text-green-600 duration-300 items-center'><FaFacebook className='size-[20px] mr-2 text-blue-600'/> <a href="https://www.facebook.com/paradisehillsandmountainresort">Paradise Hills and Mountain Resort</a></span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;