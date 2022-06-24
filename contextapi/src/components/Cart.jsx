import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CardContext';

const Cart = () => {
    const {addToCart}=useContext(CartContext);
  return (
    <div>Cart
        <button onClick={addToCart} >add to Cart</button>
    </div>
  ); 
};

export default Cart