import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[isAuthorized,setAuthorized]=useState(false);
    const Login=(username,password)=>{
        console.log(username,password);
        if(username && password)
        {
            // call api to get access token
            setAuthorized(true);
        }
    }
    const Logout=()=>{
        // call api to get informmation that session is over
        setAuthorized(false);
    }
    return <AuthContext.Provider value={{isAuthorized ,Login,Logout } }>{children}</AuthContext.Provider>
}