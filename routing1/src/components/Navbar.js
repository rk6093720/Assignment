 import React from 'react'
import {   NavLink } from 'react-router-dom'

const navbar = () => {
   const activeStyle={
    color:"blue"
   }
   const style={
    color:"black"
   }
  return (
    <div>
       <NavLink style={ ({ isActive}) => ( isActive ? activeStyle:style)}
         to="/">
        home
       </NavLink>
       <NavLink style={ ({ isActive}) => (isActive ? activeStyle : style) }to="/about">
        About
       </NavLink>
       <NavLink style={ ({ isActive}) => (isActive ? activeStyle : style) }to="/users">
        Users  
       </NavLink>
    </div>
  )
}

export default navbar