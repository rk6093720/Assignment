import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductStyles.css";
import { ProdContext } from "../context/ProdContext";

const Women = () => {
  const {handleOnClick} = useContext(ProdContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "https://62a4bccb47e6e4006397998e.mockapi.io/women",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Womens Page</h1>
      <div className="products">
        {data.map((el) => (
          <div className="product" onClick={() => handleOnClick(el)}>
            <div style={{width: "150px"}}>
              <img src={el.avatar} alt="" style={{width: "100%"}}/>
            </div>
            <div><h3>Title : {el.name}</h3></div>
            <div><h4>Type : {el.type}</h4></div>
            <div><h4>Cost : {el.price}</h4></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;