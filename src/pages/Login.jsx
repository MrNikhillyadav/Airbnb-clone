import React from 'react'

const Login = () => {
  return (
    <div className='text-center  grow  '>
      <h1 className=' text-4xl mb-4  mt-8'>Login</h1>
      
        <form className=' max-w-md m-auto text-sm'>
          {/* <input type="text" placeholder='User name' /> */}
          <input type="email" placeholder='your @email' />
          <input type="password" placeholder='your password' />
          <button className='primary'>Login</button>
        </form>
  

    </div>
  )
}

export default Login;