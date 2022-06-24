import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CardContext'
import { ThemeContext } from '../context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
    const {isAuthorized,Login,Logout}=useContext(AuthContext);
    const {buy}=useContext(CartContext);
    const {isLight,toggleTheme}= useContext(ThemeContext)
  return (
    <div>Navbar 
        <button onClick={()=>{
            if(isAuthorized) Logout() ;
            else Login("R","Z");
        }}>
            {isAuthorized ? "Logout" : "Login"}
        </button>
        <button onClick={buy}>
           Buy
        </button>
        <button onClick={toggleTheme}>{`make ${isLight ? "Dark" : "Light"} buy`}</button>
       { isAuthorized && <Wishlist/>}
    </div>
  )
}

export default Navbar