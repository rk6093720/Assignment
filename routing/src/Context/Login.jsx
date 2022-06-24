import React from 'react'
import { useContext } from 'react';
import { AppContext } from './AppProvider'

const Login = () => {
    // eslint-disable-next-line no-undef
    const [state, dispatch]= useContext(AppContext);

    const handleToggle=()=>{
        if(!state.isAuth)
        dispatch({
            type:"HANDLE_LOGIN",
            payload:{
                token:"new token"
            }
        });
        else
        dispatch({
            type:"HANDLE_lOGOUT"
        })
       
    }
  return (
    <div>
     

     <button onClick={ handleToggle}>
        { state.isAuth ? "LOGOUT" : "LOGIN"}
     </button>

        
    </div>
  )
}

export default Login