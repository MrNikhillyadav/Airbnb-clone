//install axios 

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
           const [name,setName]= useState('');
           const [email,setEmail]= useState('');
           const [password,setPassword]= useState('');

           async function registerUser(ev){
           await ev.preventDefault();  
             try{
                axios.post('/register' ,{
                  email,
                  name,
                  password,
                });
                alert('Registration Successful! Now you can log in.');
             }
             catch (e){
              alert('Registration failed. Please try again later.');
             }
           }


  return (
    
    <div className='flex mt-4 grow items-center justify-around '>
        <div className='mb-[22vh]  p-16 border-gray-900 bg-gray-200 shadow-lg rounded-2xl'>
              <h1 className=' text-3xl font-semibold text-center mb-4  '>Register</h1>
              
              {/*  on Submit, the form will trigger the RegisterUser function */}
              <form className=' max-w-sm m-auto text-sm' onSubmit={registerUser}> 

                <input type="text" 
                        placeholder='name' 
                        className='shadow-md border-none'
                        value={name} //giving value so that we can use it in useState
                        onChange={ev=> setName(ev.target.value)} />
                <input type="email" 
                        placeholder=' @email'
                        className='shadow-md border-none'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                <input type="password"
                         placeholder='password' 
                         className='shadow-md border-none'
                         value={password}
                        onChange={ev => setPassword(ev.target.value)}/>

                <button className='primary mt-2 shadow-lg'>Register</button>

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

