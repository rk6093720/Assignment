import React, { useEffect, useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    const Products = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProducts(d);
    };
    Products();
  }, []);
  
  const navigate = useNavigate();
  const handleOnClick = (prId) => {
    for(let i=0 ; i < products.length; i++) {
        if(prId === products[i].id) {
            navigate(`/products/${prId}`);
            break;
        } else {
            navigate(`/Error`);
        }
    }
  };
 
  return (
    <>
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      </div>




      <div className="in">
      <input
        type="number"
        placeholder="Enter product id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleOnClick(value)}>Jump to product</button>
    </div>
    </>
  );
};

export default Navbar;