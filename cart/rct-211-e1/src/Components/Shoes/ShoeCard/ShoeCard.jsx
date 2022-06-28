import React from "react";
import "./ShoeCard.css"

const ShoeCard = (item) => {
   const shoeId = item.shoes.id;
  console.log(item)
  return (
    <div  id="card" key={shoeId}>
      <div data-cy={`shoe-card-wrapper-${shoeId}`} key={shoeId} className="single" >
      <img data-cy="shoe-card-image" className="pic" alt="shoe" src={item.shoes.image}/>
      <div>
        <div data-cy="shoe-name">{item.shoes.name}</div>
        <div className="btn">
          In Cart:
          <div data-cy="shoe-count">{item.shoes.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default ShoeCard;