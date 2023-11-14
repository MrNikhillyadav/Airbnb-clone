import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    // justify-around awesome concept,(for even space on each side)

    <div className='flex mt-4 grow items-center justify-around '>
        <div className='mb-[22vh]'>
              <h1 className=' text-3xl text-center mb-4 font-semibold '>Login</h1>
              
              <form className=' max-w-sm m-auto text-sm'>
                {/* <input type="text" placeholder='User name' /> */}
                <input type="email" placeholder='your @email' />
                <input type="password" placeholder='your password' />

                <button className='primary'>Login</button>

                <div className='text-center text-[16px] '>
                  Don't have an account yet ? 
                  <Link className='text-gray-500 underline' to = {'/register'}> Register Now</Link>
                </div>
              </form>

        </div>
        
    </div>
  )
}

export default LoginPage;