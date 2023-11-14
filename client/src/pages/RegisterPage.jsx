//install axios 

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
           const [name,setName]= useState('');
           const [email,setEmail]= useState('');
           const [password,setPassword]= useState('');

           function RegisterUser(ev){
            ev.preventdefault();  
              axios.get('http://localhost:4000/test');
           }
  return (
    
    <div className='flex mt-4 grow items-center justify-around '>
        <div className='mb-[22vh]'>
              <h1 className=' text-3xl font-semibold text-center mb-4  '>Register</h1>
              
              {/*  on Submit, the form will trigger the RegisterUser function */}
              <form className=' max-w-sm m-auto text-sm' onSubmit={RegisterUser}> 

                <input type="text" 
                        placeholder='Nikhil Yadav' 
                        value={name} //giving value so that we can use it in useState
                        onChange={ev=> setName(ev.target.value)} />
                <input type="email" 
                        placeholder='your @email'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                <input type="password"
                         placeholder='your password' 
                         value={password}
                        onChange={ev => setPassword(ev.target.value)}/>

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

