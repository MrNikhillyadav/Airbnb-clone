import React from 'react'
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  return (
    
    <div className='flex mt-4 grow items-center justify-around '>
        <div className='mb-[22vh]'>
              <h1 className=' text-3xl font-semibold text-center mb-4  '>Register</h1>
              
              <form className=' max-w-sm m-auto text-sm'>
                <input type="text" placeholder='Nikhil Yadav' />
                <input type="email" placeholder='your @email' />
                <input type="password" placeholder='your password' />
                <button className='primary'>Register</button>
                <div className='text-center text-[16px] '>
                  Already have an account ?  
                  <Link className='text-gray-500 underline' to = {'/login'}> Login</Link>
                </div>
              </form>

        </div>
        
    </div>
  )
}

export default RegisterPage

