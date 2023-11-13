import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='max-w-[1350px]  m-auto flex flex-col min-h-screen '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout