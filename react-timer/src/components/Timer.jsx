import React from 'react'
import { useState , useEffect, useRef } from 'react'

const Timer = () => {
    const[hours,setHours]=useState(0);
    const [minutes,setMinutes]= useState(0)
    const [second,setSecond]=useState(0);
    const renders=useRef(0);
    const timerId=useRef();
    // const handleChange=(e)=>{
    //     setSecond(e.target.value);
    //     renders.current++;
    // }

    const startTimer=()=>{
        timerId.current=setInterval(()=>{
            renders.current++;
            setSecond(prev => prev + 1);
        },1000)
        timerId.current=setInterval(()=>{
            renders.current++;
            setHours(prev =>prev +1)
        })
        timerId.current=setInterval  
    }

    const stopTimer=()=>{
        clearInterval(timerId.current)
        timerId.current=0;
    }

    const restTimer =()=>{
        stopTimer();
        if(second){
            renders.current++;
            setSecond(0)
        }
    }
    useEffect(()=>{
     console.log(second);
    },[second])
  return (
    <div className='t'>Timer
        <div id='second'>{second}</div>
        <button className='start' onClick={startTimer}>Start</button>
      
        <button className='stop' onClick={stopTimer}>Stop</button>
     
        <button className='reset' onClick={restTimer}>Reset</button>
    </div>
  )
}

export default Timer