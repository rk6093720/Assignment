import React,{useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import Cart from './Cart'
const Product = () => {
    // const condition=true;
    const {isAuthorized}=useContext(AuthContext)

  return (
    <div>Product :{isAuthorized ?"LoggedIn":"LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product