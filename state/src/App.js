import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Cities from './components/Cities';
import Country from './components/Countries';

const getCountries = () =>{
  return axios({
    url:"https://62a4bccb47e6e4006397998e.mockapi.io/countries",
    method:"GET"
  });
};
const getCities =()=>{
  return axios({
    url:"https://62a4bccb47e6e4006397998e.mockapi.io/cities",
    method:"GET"
  })
}

export default  function App() {
const [countries,setCountries]=useState([]);
const [cities,setCities]= useState([]);
  useEffect(()=>{
  getCountries().then((res)=>{
    setCountries(res.data);
  });
  },[]);
  console.log(countries);
  useEffect(()=>{
    getCities().then((res)=>{
       setCities(res.data)
    });
  },[]);
  console.log(cities);
  return (
    <div className="App">
     <h1>Countries</h1>
    
       

   <Country countries={countries}/>


   
     <h1>Cities</h1>
     <Cities cities={cities}/>
     
    </div>
  );
}


