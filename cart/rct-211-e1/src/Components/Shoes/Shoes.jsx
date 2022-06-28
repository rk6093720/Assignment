import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios";
// import "./Shoes.css"
import { ShoeCard } from "./ShoeCard";

const Shoes = () => {

  
  const getShoes  = async (dispatch) => {
    const shoesRequestAction = getShoesRequest()       
      dispatch(shoesRequestAction);
      try {
      const res = await axios({
        url: "http://localhost:8080/shoes",
        method: "GET"
      });
      const shoesSuccessction = getShoesSuccess(res.data);
      dispatch(shoesSuccessction);
    } catch (e) {
      const shoesFailureAction = getShoesFailure(e);
      dispatch(shoesFailureAction);
    }
}
  const shoes = useSelector((state) => state.shoes);
  const dispatch = useDispatch();
  useEffect(() => {
    getShoes(dispatch);
  }, [dispatch]);
  console.log(shoes)
  
  return <div  id="card">
    {
       shoes?.map((item)=>(
          <ShoeCard shoes={item}/>
       ))  
    }
    </div>;
};

export default Shoes;