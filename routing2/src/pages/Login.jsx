import { useContext } from "react";
import { useState } from "react"



function Login(){
    const[email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const [state, dispatch]= useContext(AuthContext);
    const navigate=useNavigate();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        userLogin({email,password}).then((res)=>{
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:{
                    token:res.data.token
                }
            });
            navigate("/users");
        })
    };
    if(state.isAuth){
        return <Navigate to="/" />;
    }
    return(
        <form  onSubmit={handleFormSubmit}>
            <div>
                <input
                type="email"
                value={email}
                placeholder="enter your email address"
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <input type="submit" value="submit" />




            </div>




        </form>
    )
}
export default Login;