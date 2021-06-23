import React from 'react';

const defaultValue = {
    isLoggedIn:false,
    user:{},
    login:()=>{},
    logout:()=>{}
}

export const UserContext = React.createContext(defaultValue);
