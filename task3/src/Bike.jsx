import React, { useEffect,useState,useLayoutEffect } from 'react'

export default function Bike(props) {
    const [bike,setBike]=useState({colour:"blue",model:"950"})
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setBike({colour:props.bikes.colour,model:props.bikes.model})
    },[props.bikes])
    useEffect(()=>{
        setCount(count+1)
    },[props.bikes])
   
  return (
    <div>getdrivedstatefromprops<br />
    {bike.colour}<br />
    {bike.model}
    <p>ComponentdidUpdate</p>
    <p>{count}</p>
    </div>
  )
}
