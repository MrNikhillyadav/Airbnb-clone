import React from 'react'
import {BsCart2,BsSearch}  from 'react-icons/bs';
import {SiValorant} from 'react-icons/si';

const Navbar = () => {
  return (
    <div className='Navbar w-full h-2vh text-[16px] font-semibold text-gray-700 mt-8 '>
        <div className='max-w-[1100px]  bg-white  m-auto flex justify-between  items-center '>
        <div className='text-[#FF395D] font-bold text-lg flex  gap-2 justify-center items-center'>
            <div className='dropshadow-lg'><SiValorant/></div>
            <p >ValoShop</p>
        </div>
        <ul className=' flex  items-center border  px-4 rounded-full py-1 justify-between gap-10'>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">KIDS</a></li>
            <li><a href="#">BEAUTY</a></li>
            <li><a href="#">SUPPORT</a></li>
        </ul>
        <div className=' flex   items-center justify-center gap-2'>
             <div className='text-md hover:scale-125 ease-in-out duration-200 border p-2 rounded-full'>< BsSearch/></div>
             <div className='text-lg bg-[#FF395D]  text-white  rounded px-2 py-1 '> <BsCart2/> </div>
             
        </div>
        
            
        </div>
    </div>
  )
}

export default Navbar