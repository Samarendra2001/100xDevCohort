import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UserefLearning = () => {
  const[incometax,setIncometax] = useState(20000);
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 100;
    }, 3000);
  },[])
  return (
    <div>Hi there, your income tax returns are <div ref = {divRef}>{incometax}</div></div>
  )
}

export default UserefLearning