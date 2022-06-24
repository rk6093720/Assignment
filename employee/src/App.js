// import logo from './logo.svg';
// import Form from './components/Form';
import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import { Form } from './components/Form';
import {Tablu} from './components/Tablu';

function App() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
    let res=await fetch("http://localhost:8080/displaypic");
    let data=await res.json();
    console.log(data);
    setData(data)
  }
  return (
    <div className="App">
      <h1>Employee Details</h1>
      <Form />
       <Tablu data={data}/>
    </div>
  );
}

export default App;





