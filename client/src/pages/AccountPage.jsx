import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext.jsx'
import { Navigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage.jsx';
import { MdAccountCircle } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LuClipboardList } from "react-icons/lu";

const AccountPage = () => {
    const {ready, user, setUser} = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    
    //upar lekr aaye hai hum iss code ko.
    let {subpage} = useParams();
    if (subpage === undefined){
        subpage = 'profile';
    }
    console.log(subpage);

    //api call for logout
    async function logout(){
         await axios.post('/logout');
         setUser(null);    // to change the context after logout i.e. to delete the name from navbar once logged out.
         setRedirect('/');
         
    }
    //if not ready, and also data is not fetched, show loading...
    if(!ready ){
        return 'Loading...';
    }
    
    //if ready but user not logged in, navigate to login page on clicking the icon.
    if(ready && !user && !redirect){    // to go straight to index page when user is logged out and not to login page.
        return <Navigate to = {'/login'} /> 
        
    }

    if(redirect){
       return <Navigate to={redirect} />;
    }
    

    function linkClasses(type=null){
        let classes = " px-4 text-sm inline-flex items-center  gap-1 py-1";
        if((type === subpage ) ){ 
            classes += ' bg-[#FF395D] text-white  rounded-full';   //!!!!space before class is super important.
            //spacing before bg-[#FF395D] ensures that there is a space before the new class, making it a separate class.
        }
        else{
            classes += ' bg-gray-200 shadow-md rounded-full';
        }
        return classes;
    }

   //if ready and user is logged in . Show the page..
  return (
    // <div>AccountPage for Mr. {user.name} </div> //adding ? is important here if not using !ready condition. video: 1:52:52
    <div>
        <nav className=' w-full mt-4  items-center flex justify-center gap-2'>
            <Link  className={linkClasses('profile')} to={'/account'}>
                <MdAccountCircle className='text-center' />
                My Profile
            </Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                <LuClipboardList />
                My bookings
            </Link>
            <Link className={linkClasses('places')} to={'/account/places'}>
                <SiHomeassistantcommunitystore />
                My accomodations
            </Link>
        </nav>

        {subpage === 'profile' && (
            <div className='max-w-xs mt-8  p-8 text-sm text-gray-700  rounded-md bg-gray-200  shadow-md  mx-auto text-center '>
                <span className='text-xs text-gray-600'>Logged in as </span> {user.name} {user.email} <br />
                <button onClick={logout} className='w-full  bg-[rgb(255,57,93)] hover:bg-[rgba(255,57,93,0.94)] text-white  mt-2'>Logout</button>
            </div>
            //Now we ll add endpoint to reset the cookies.
        )}

        {subpage == 'places' && (
                <div>
                    <PlacesPage/>
                </div>
            )
        }
    </div>
  )
}

export default AccountPage

// Problem arised : 
// video timestamp: 1:50:00;

// 1. on refreshing the page even if user is logged in, it redirect us to login page . 
//     This is because in userContext page, the call takes few millsec to fetch useRouteLoaderData, meanwhile 
//     accountpage code SiRundeck, that gets user as Null, and redirect us to Login Page.AccountPage. 
    
//     So, we will show Loading.... until useEffect fetches user data.