import React, { useReducer} from "react";

export const AppContext= React.createContext();

export default function AppContextProviderWrapper({children,reducer}){

    // const [state , setState]= useState({
    //     isAuth:false,
    //     token:"ABCD"
    // }); 
 // eslint-disable-next-line no-undef
 const [state ,  dispatch]=useReducer(reducer,{
    isAuth:false,
    token: "ABCD"
 }
 );
    // const handleLogin=(token)=>{
    //     setState({
    //         ...state,
    //         isAutrue,
    //         token:token
    //     });
    // };

    // const handleLogout=()=>{
    //     setState({
    //         ...state,
    //         isAuth:false,
    //         token:null
    //     })
    // }
return (
     <AppContext.Provider value={[state , dispatch]}>
    {children}
</AppContext.Provider>
);
} 