import React from 'react'
import {BsCart2,BsSearch}  from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='Navbar w-full h-2vh text-[16px] font-semibold text-gray-700 mt-8 '>
        <div className='max-w-[1100px] border bg-white  m-auto flex justify-between  items-center '>
        <div>
            Logo
        </div>
        <ul className=' flex  items-center justify-between gap-10'>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">KIDS</a></li>
            <li><a href="#">BEAUTY</a></li>
            <li><a href="#">ELECTRONICS</a></li>
            <li><a href="#">SUPPORT</a></li>
        </ul>
        <div className=' flex   items-center justify-center gap-2'>
             <div className='text-md'>< BsSearch/></div>
             <div className='text-lg'> <BsCart2/> </div>
             
        </div>
        
            
        </div>
    </div>
  )
}

export default Navbar