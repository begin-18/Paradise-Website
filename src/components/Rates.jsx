import React from 'react'
// import {data} from '../data/DataImages'


const Rates = () => {
 
  return (

    <div id='rates' className='rounded-lg bg-gradient-to-r from-green-700 to-green-400 p-5 lg:p-[5rem] shadow-2xl mx-[5vw] lg:mx-[10vw]'>
      <div className='text-center p-5'>
        <h1 className='text-sm md:text-xl'>Operating Hours: <span className='font-semibold'> 8 AM to 5PM, <span>Mondays to Sundays</span></span></h1>
      </div>
      <div className='flex items-center justify-center'>
        <table class="table-auto text-center border-2">
            <thead className='border-2'>
              <tr className='border-2'>
                <th className='border-2'></th>
                <th></th>
                <th className='w-[20vw] text-center'>Price</th>
              </tr>
            </thead>
            <tbody className='text-[12px] sm:text-[16px]'>
              <tr>
                <td>Entrance Fee:</td>
                <td>Adult</td>
                <td>100</td>
                
              </tr>
              <tr>
                <td></td>
                <td>Kids</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Table</td>
                <td>Per Day Use</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Cottage</td>
                <td>Per Day Use</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Mushroom Table</td>
                <td>Per Day Use</td>
                <td>800</td>
              </tr>
              <tr>
                <td>Tent</td>
                <td>Per Day Use - With 2 tables and 10 chairs</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>Corkage</td>
                <td></td>
                <td>None as the moment</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Rates
