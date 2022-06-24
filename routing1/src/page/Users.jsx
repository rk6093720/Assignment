import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
const Users = () => {
    const [loading , setLoading]= useState(false)
    const [data,setData]= useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    const [page,setPage]=useState(Number(searchParams.get("page"))??1);
    const [text, setText]= useState(searchParams.get("text")??"");
    useEffect(()=>{
        setLoading(true);
        setSearchParams({
            page
        })
        axios({
            url:"https://reqres.in/api/users",
            params:{
                page:page
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
    },[page]);
  useEffect(()=>{
    setSearchParams({
        page,
        text
    });
  },[page,text])
    if(loading)
    {
        return <h3>Loading</h3>
    }
    console.log(data);
    let user=data.data;
    console.log(user);
    // const users=[
    //     {id:1,name:"Rohit"},
    //     {id:2,name:"Ravi"},
    //     {id:3,name:"kumar"},
    //     {id:4,name:"dandiya"},
    //     {id:5,name:"Rohit"},
    // ]
  return (
    <div>
        <div>
            <button disabled={page===1} onClick={()=>setPage(1)}>Next</button>
            <button  disabled={page===2}onClick={()=>setPage(2)}>Prev</button>
        </div>
        <div>
            <input type={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        {user?.map((user)=>{
            return (
                <div key={user.id}>
                    <div>id:{user.id}</div>
                    <div>
                        <img src={user.avatar} alt="icon-user " width="50px" />
                        </div>
                    <div>name:{user.first_name}</div>
                <div>
                    <Link to={`/users/${user.id}`}>
                        See More
                    </Link>
                   
                    </div>
                    </div>
            )
        })}


    </div>
  )
}

export default Users;  