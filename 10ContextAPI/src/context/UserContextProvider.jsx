import React from 'react';
import UserContext from './UserContext.js';

const UserContextProvider=({children})=>{
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    // every component written inside will have UserContext access
    )
}

export default UserContextProvider

