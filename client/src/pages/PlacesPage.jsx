import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaWifi, FaDog, FaBath,FaParking } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdRadio } from "react-icons/md";

const PlacesPage = () => {
  const {action} = useParams();
  console.log(action);
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);

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
                      <input type="text"  placeholder='address' />
                      <h2  className='text-lg mt-4' >Photos</h2>
                      <p className='text-xs text-gray-500'>more = better</p>
                      <div className='text-xs flex gap-2 text-gray-500'>
                          <input type="text"  placeholder='add using link ... pngs , jpg  ' />
                          <button className='bg-gray-200 px-12 shadow-md rounded-full' >  Add&nbsp;photos</button>
                      </div>
                      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 '>
                          <button className='border border-gray-300 text-gray-700 flex justify-center gap-1 text-gray- p-8 text-xs mt-4  bg-white'>
                            <AiOutlineCloudUpload className='text-xl' />
                            Upload 
                          </button>
                      </div>
                      <h2  className='text-lg mt-4' >Description</h2>
                      <p className='text-xs text-gray-500'>description of the place</p>
                      <textarea className='py-8 rounded-md' />

                      <div >
                            <h2  className='text-lg mt-4' >Perks</h2>
                            <p className='text-xs text-gray-500'>Select all the perks of your place</p>
                            <div className=' gap-2 cursor-pointer mt-2 grid grid-cols-2  md:grid-cols-3 ld:grid-cols-6 '>

                                <label className='flex items-center  gap-2  p-4 rounded-md border border-gray-300  justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'> <FaWifi className='text-lg' />Free Wifi </span>
                                </label>

                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'>
                                      <FaDog  className='text-lg'/>Pets allowed</span>
                                </label>

                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'><TbAirConditioning className='text-lg' />Central air conditioning</span>
                                </label>

                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'><FaBath className='text-lg' />Bath service </span>
                                </label>
                              
                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'><MdRadio   className='text-lg'/>Radio available</span>
                                </label>

                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'><FaParking  className='text-lg'/>Free Parking spot</span>
                                </label>

                                <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                                    <input type="checkbox" />
                                    <span className='text-xs flex items-center gap-1'><PiTelevisionSimpleFill  className='text-lg'/>TV service</span>
                                </label>
                            </div>
                      </div>

                      <h2  className='text-lg mt-4' >Extra info</h2>
                      <p className='text-xs text-gray-500'>home rules, etc.</p>
                      <textarea/>

                      <h2  className='text-lg mt-4' >Check-in&out times</h2>
                      <p className='text-xs text-gray-500'>Check in and out times, remember to have some time window between the guest arrivals.</p>
                      <div className='grid  gap-4 sm:grid-cols-3'>
                          <div className=''>
                              <h3 className='text-sm mt-2  -mb-1'>Check-in time</h3>
                              <input type="text" className='rounded-md' placeholder='14:00'/>   
                          </div>
                          <div>
                              <h3 className='text-sm mt-2 -mb-1'>Check-out time</h3>
                              <input type="text"  placeholder='16:00'/>   
                          </div>
                          <div>
                              <h3 className='text-sm mt-2 -mb-1'>Maximum Number of Guests</h3>
                              <input type="text" placeholder='7'  />   
                          </div>
                          
                    
                      </div>
                      <button className=' mt-6  mx-auto primary'>Save</button>

              </form>
            </div>
          )}

    </div>
  )
}

export default PlacesPage