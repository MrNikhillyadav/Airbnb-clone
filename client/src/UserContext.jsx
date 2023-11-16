import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext({});

// Create a Provider component
export function  UserContextProvider ({ children }) {
  // The value that will be provided to all descendant components that consume the context
  const [user, setUser] = useState(null);
  return (
        <UserContext.Provider value={{user, setUser }}>
            {children}
        </UserContext.Provider>
  );
}


