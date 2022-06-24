import React, { useContext } from "react";
import { ProdContext } from "../context/ProdContext";

const Details = () => {
  const { details } = useContext(ProdContext);
  return (
    <div>
      <div className="product">
        <div style={{ width: "150px" }}>
          <img src={details.image} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <h3> {details.name}</h3>
        </div>
        <div>
          <h5>{details.type}</h5>
        </div>
        <div>
          <h5>Cost - {details.price}</h5>
        </div>
        
      </div>
    </div>
  );
};

export default Details;