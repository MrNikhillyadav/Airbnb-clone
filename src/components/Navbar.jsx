import React from 'react'
import {BsFillPersonFill,BsSearch}  from 'react-icons/bs';
import {SiValorant} from 'react-icons/si';
import {IoMenuOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar w-full h-2vh text-[16px] font-semibold text-gray-700 mt-8 '>
        <div className=' bg-white  m-auto flex justify-between  items-center '>
        <div className='text-[#FF395D] font-bold text-lg flex  gap-2 justify-center items-center'>
            <div className='dropshadow-lg text-2xl'><SiValorant/></div>
            <p >ValoShop</p>
        </div>
        <ul className=' flex  items-center border px-4 rounded-full py-1 justify-between gap-10'>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">KIDS</a></li>
            <li><a href="#">BEAUTY</a></li>
            <li><a href="#">SUPPORT</a></li>

            <div className='text-md  bg-[#FF395D] mr-[-10px] text-white ease-in-out duration-200 border rounded-full p-2'>< BsSearch/></div>

        </ul>
        <div className=' flex   items-center justify-center gap-2'>
             <div className='text-md hover:scale-125 ease-in-out duration-200 border rounded-full p-2'>< IoMenuOutline/></div>
             <Link to={'/login'} className='text-lg bg-[#FF395D]  text-white  rounded-full p-1 '> <BsFillPersonFill/> </Link>
             
        </div>
        
            
        </div>
    </div>
  )
}

export default Navbar