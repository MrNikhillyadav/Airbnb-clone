
import React, { useContext } from 'react'
import {BsFillPersonFill,BsSearch}  from 'react-icons/bs';
import {SiValorant} from 'react-icons/si';
import {IoMenuOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
//grab user from userContext to show username after login

const Navbar = () => {
  const {user} = useContext(UserContext);
  return (
    <div className='Navbar w-full h-2vh text-[16px] font-semibold  text-gray-700 mt-4 '>
        <div className=' bg-white  m-auto flex justify-between  items-center '>

        <Link to = {'/'} className='text-[#FF395D] font-bold text-lg flex  gap-2 justify-center items-center'>
            <span className='dropshadow-lg text-4xl'><SiValorant/></span>
            <span >ValoShop</span>
        </Link>

        <ul className=' flex  items-center justify-around border border-gray-600 shadow-md px-10 py-2 rounded-full   gap-10'>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">KIDS</a></li>
            <li className='hidden md:block'><a href="#">BEAUTY</a></li>

            <div className='text-md  bg-[#FF395D] mr-[-18px] text-white ease-in-out duration-200 border rounded-full p-1'>< BsSearch/></div>

        </ul>
        <div className=' flex   items-center  justify-center border border-gray-600 px-2 gap-1 rounded-full shadow-lg '>
              {/* //setting the name of loggedin user after login. Double !! convert variable into boolean */}
              { !! user && (
                <div className='text-center  text-[14px] px-1 flex justify-center items-center'>
                  {user.name}
                </div>
              )}
            {/*  if user is loggin in, then on clicking icon redirect to account page.. */}
            <Link to={user? '/account' : '/login'} className='text-md bg-[#383838]  text-white  rounded-full p-1 '> 
              <div>
                  <BsFillPersonFill/>
              </div>
            </Link> 

            <div className='text-md hover:scale-125 ease-in-out duration-200 border rounded-full p-2'>< IoMenuOutline/></div>
        </div>
        
            
        </div>
    </div>
  )
}

export default Navbar