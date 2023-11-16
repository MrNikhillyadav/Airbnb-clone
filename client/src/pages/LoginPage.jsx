import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from './../UserContext';

const LoginPage = () => {
   const [email, setEmail] =  useState('');
   const [password, setPassword] =  useState('');
   const [redirect,setRedirect] = useState(false);

   //to put loggedin user info into context,grab the setUser
   const {setUser} =  useContext(UserContext);

   async function handleLoginUser(ev){
    ev.preventDefault();
    try{
      // await axios.post('/login', {email, password}); 
      //to grab the response.data or directly {data} of currently logged in user,save it to a variable.
      const {data} = await axios.post('/login', {email, password});
      setUser(data);
      alert('Login Successful');
      setRedirect(true);
    }
    catch(e){
      console.error('login failed :',  e)
      alert('Sorry Login failed!')
    }
   }

  // redirecting to indexPage after successful login.
   if(redirect){
    return <Navigate to={'/'}/>;
   }



  return (
    // justify-around awesome concept,(for even space on each side)

    <div className='flex mt-4 grow items-center justify-around '>
        <div className='mb-[22vh]'>
              <h1 className=' text-3xl text-center mb-4 font-semibold '>Login</h1>
              
              <form className=' max-w-sm m-auto text-sm' onSubmit={handleLoginUser}>
                {/* <input type="text" placeholder='User name' /> */}
                <input type="email" 
                placeholder='your @email' 
                value={email}
                onChange={ev => setEmail(ev.target.value )}/>

                <input type="password"
                 placeholder='your password'
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />

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