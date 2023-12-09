import React, { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'
import { Navigate, Link, useParams } from 'react-router-dom';

const AccountPage = () => {
    const {ready, user} = useContext(UserContext);

    //if not ready, and also data is not fetched, show loading...
    if(!ready && !user){
        return 'Loading...';
    }
    //if ready but user not logged in, navigate to login page on clicking the icon.
    if(ready && !user){
        return <Navigate to = {'/login'} /> 
        
    }
    const {subpage} = useParams();
    console.log(subpage);

    function linkClasses(type=null){
        let classes = " px-4 text-[16px] py-1";
        if((type === subpage ) || (type === 'profile' && subpage === undefined)){
            classes += ' bg-[#FF395D] text-white  rounded-full'; //!!!!space before class is super important.
            //spacing before bg-[#FF395D] ensures that there is a space before the new class, making it a separate class.
        }
        return classes;
    }

   //if ready and user is logged in . Show the page..
  return (
    // <div>AccountPage for Mr. {user.name} </div> //adding ? is important here if not using !ready condition. video: 1:52:52
    <div>
        <nav className=' w-full mt-4 items-center flex justify-center gap-2'>
            <Link  className={linkClasses('profile')} to={'/account'}>My Profile</Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>My accomodations</Link>
        </nav>
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