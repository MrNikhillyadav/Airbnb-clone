import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Perks from '../components/Perks';
import axios from 'axios';

const PlacesPage = () => {
  const {action} = useParams();
  // console.log(action);

  //Setting up the states for the form.
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

// same code repeat hora tha jada to function bana diya h
  function inputHeder(text){
    return(<h2 className='text-lg mt-4'>{text}</h2>)  
  }

  function inputDescription(text){
    return( <p className='text-xs text-gray-500'>{text}</p>)   
  }

  function preInput(header, description){
    return(
          <>
            {inputHeder(header)}
            {inputDescription(description)}
          </>
          )
  }

  async function addPhotoByLink(ev){          // it will upload the link to the server and it will
    ev.preventDefault();
   const {data : filename} = await axios.post('/upload-by-link', {link : photoLink}); //{data : filename} to rename file name to 'filename'. 
   //Now we can use setPhoto state to return previous photolinks with the latest filename.
   setAddedPhotos(prev =>{
    return [...prev, filename];   // means array of all the previous values with filename.
   })
   setPhotoLink('');
  }
  
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
              {/* Input form */}
              <form >
                      {preInput('Title', 'Title of the place')}
                        <input type="text" value={title} onChange={ev=> setTitle(ev.target.value)}  placeholder='family apartment' />

                      {preInput('Address', 'Address to this place.')}
                        <input type="text" value={address} onChange={ev=> setAddress(ev.target.value)}  placeholder='address' />

                      {preInput('Photos' ,"more = better")}
                        <div className='text-xs flex gap-2 text-gray-500'>
                              <input type="text" value={photoLink} onChange={ev=> setPhotoLink(ev.target.value)} placeholder='add using link ... pngs , jpg  ' />
                              <button onClick={addPhotoByLink} className='bg-gray-200 px-12 shadow-md rounded-full' >  Add&nbsp;photos</button>
                        </div>

                      <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-2 '>
                          {addedPhotos.length > 0 && addedPhotos.map(link =>(
                                <div className='flex items-center mt-4 justify-center text-xs border border-gray-300 rounded-lg'>
                                  <img  src={'http://localhost:400/uploads/'+link}  />
                              </div>
                          ))}
                            <button className='border border-gray-300 text-gray-700 flex justify-center gap-1 text-gray- p-8 text-xs mt-4  bg-white'>
                              <AiOutlineCloudUpload className='text-xl' />
                              Upload 
                            </button>
                      </div>

                      {preInput('Description', 'description to this place')}
                      <textarea className='py-8 rounded-md' value={description} onChange={ev=> setDescription(ev.target.value)}/>

                      
                      {preInput('Perks', 'Select all the perks of your place')}
                      {/* Building a separate component for the Perks */}
                        <div className=' gap-2 cursor-pointer mt-2 grid grid-cols-2  md:grid-cols-3 ld:grid-cols-6 '>
                            <Perks  selected={perks} onChange={setPerks} />
                        </div>

                      {preInput('Extra info', 'home, rules, etc.')}
                      <textarea value={extraInfo} onChange={ev=> setExtraInfo(ev.target.value)}/>

                      {preInput('Check-in&out times','Check in and out times, remember to have some time window between the guest arrivals.')}
                      {/* CHECK-IN& OUT, Max Guests  div*/}
                        <div className='grid   gap-4 md:grid-cols-3 sm:grid-cols-2'>
                              <div >
                                  <h3 className='text-sm mt-2  -mb-1'>Check-in time</h3>
                                  <input type="text" value={checkIn} onChange={ev=> setCheckIn(ev.target.value)}  placeholder='6'/>   
                              </div>
                              <div>
                                  <h3 className='text-sm mt-2 -mb-1'>Check-out time</h3>
                                  <input type="text" value={checkOut} onChange={ev=> setCheckOut(ev.target.value)}  placeholder='7'/>   
                              </div>
                              <div>
                                  <h3 className='text-sm mt-2  -mb-1'>Maximum&nbsp;Number&nbsp;of&nbsp;Guests</h3>
                                  <input type="number"  value={maxGuests} onChange={ev=> setMaxGuests(ev.target.value)} placeholder='8'  />   
                              </div>
                      </div>

                      {/* Save button */}
                      <button className=' mt-6  mx-auto primary'>Save</button>

              </form>
            </div>
          )}

    </div>
  )
}

export default PlacesPage