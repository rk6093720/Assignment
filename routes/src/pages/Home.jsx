// import { buildQueries } from "@testing-library/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import ImageSlider from "../components/ImageSlider";
import { ProdContext } from "../context/ProdContext";
import "../Styles/ProductStyles.css";
const Home = () => {
  const { handleOnClick } = useContext(ProdContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/allhome",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);

  const homeStyle = {
    textAlign: "center",
    margin: "auto",
  };

  const btn= {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px"
  }

  return (
    <div style={homeStyle}>
      <h1>Products</h1>
      <div className="container"></div>
      <div className="products">
        {data.map((el) => (
          <div className="product" >
            <div style={{ width: "150px" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "100%", height: "200px" }}
              />
            </div>
            <div>
              <h3> {el.name}</h3>
            </div>
            <div>
              <h5>{el.type}</h5>
            </div>
            <div>
              <h5>Cost : {el.price}</h5>
            </div>
            <button style={btn} onClick={() => handleOnClick(el)}>ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;