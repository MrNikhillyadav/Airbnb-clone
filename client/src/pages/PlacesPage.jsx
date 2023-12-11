import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";

const PlacesPage = () => {
  const {action} = useParams();
  console.log(action);

  return (
    <div>
        {/* if 'new' nahi h to add new place option. Agar new hai to form aayega. */}
          {action !== 'new' && (
            <div className='text-center  mt-4'>
                <Link className='text-center inline-flex items-center gap-2 px-4 text-xs py-1 rounded-full  text-white bg-[#FF395D]' 
                    to={'/account/places/new'}> 
                  <IoAdd className='text-lg'/>
                    Add new place
                </Link>
            </div>
          )}

          {/* 'new' hai to show the form to add new place */}
          {action === 'new' && (
            <div>
              <form >
                      
                      <h2 className='text-lg mt-4'>Address</h2>
                      <p className='text-xs text-gray-500'>Address to this place.</p>
                      <input type="text" placeholder='address' />
                      <h2  className='text-lg mt-4' >Photos</h2>
                      <p className='text-xs text-gray-500'>more = better</p>
                      <div className='text-xs text-gray-500'>
                          <input type="text" placeholder='add using link ... pngs , jpg  ' />
                      </div>
                      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 '>
                          <button className='border border-gray-400 p-8 text-2xl mt-4  bg-white'> + </button>
                      </div>
              </form>
            </div>
          )}

    </div>
  )
}

export default PlacesPage