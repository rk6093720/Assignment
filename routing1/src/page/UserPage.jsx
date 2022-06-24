import React , {useState , useEffect} from 'react'
import {useLocation , useParams } from 'react-router-dom'
import axios from "axios";
function UserPage() {
    // let path=window.location.pathname;
    // let values=path.split("/");
    // let id=values[values.length-1];
    const params=useParams();
    const location = useLocation();
    const [loading , setLoading]= useState(false)
    const [data,setData]= useState([]);
    useEffect(()=>{
        setLoading(true)
        axios({
            url:`https://reqres.in/api/users/${params.user_id}`,
            params:{
                page:1
            }
        }) 
        .then(res=>{
            setLoading(false)
            setData(res.data )
        })
        .catch((err)=>{
            setLoading(false);
            alert("error");
        });
    },[params.user_id])
console.log(data);
if(loading)
{ 
    return <h3>Loading</h3>
}
console.log(data);
let user=data.data;
// console.log(user); 
    // console.log(params,location );
  return (
  <> 
  <div>UserId:{user?.id}</div>
  <div>Email:{ user?.email}</div>
  <div>Full name:{user?.first_name} {user?.last_name}</div>
  <div><img src={user?.avatar} alt={user?.email} /></div>
  </>
  );

}

export default UserPage