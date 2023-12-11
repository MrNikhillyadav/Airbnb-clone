// layout is on top of every pageXOffset. So to check user is logged in or not on every route we have to create a CONTEXT


import axios from 'axios';
import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const UserContext = createContext({});

// Create a Provider component
export function  UserContextProvider ({ children }) {
  // The value that will be provided to all descendant components that consume the context
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  
  useEffect(() =>{
  //check if user is empty, fetch user profile info from axios get request
    if(!user){
      // axios.get('/profile') //for this create an endpoint into the index.js.
      // grab the user data from the response and set user from this data.
      const {data} = axios.get('/profile').then( ({data}) =>{
        setUser(data); //Now even after refreshing page, once loggin username will be shown there....
        setReady(true);
      });
    }
  }, []);

  return (
        <UserContext.Provider value={{user, setUser, ready }}>
            {children}
        </UserContext.Provider>
  );
}

// the useEffect takes few milliseconds to fetch user data. Meanwhile we will show Loading......

