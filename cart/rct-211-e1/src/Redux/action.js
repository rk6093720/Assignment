//Create ActionCreator functions here

import * as types from "../Redux/actionTypes";


const getShoesRequest=()=>{
    return {
        type:types.GET_SHOES_REQUEST
    };
}
 const getShoesSuccess = (payload) =>{
    return {
        type:types.GET_SHOES_SUCCESS, payload 
    };
}
    const getShoesFailure=()=>{
        return {
            type:types.GET_SHOES_FAILURE
        };
    }
   

    export {
        getShoesFailure,
        getShoesSuccess,
        getShoesRequest,
       
    }