import { useEffect, useState } from "react"
import Bike from "./Bike"
export default function App() {
  const [bike,setBike]=useState({colour:"red",model:"750"})
  useEffect(()=>{
    console.log("hello")
  },[])
  const Update=()=>{
    setBike({colour:"blue",model:"500"})
  }
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount(count + 1)
    };

    document.getElementById("id").addEventListener('click', handleClick)
    return () => {
      document.getElementById("id").removeEventListener('click', handleClick)
    };
  }, [count])
  return (
    <div>
    constructor <br />
    {bike.colour} <br />
    {bike.model}
    <Bike bikes={bike}></Bike>
    <button onClick={()=>{Update()}}>Update</button>
    <p id="id">ComponentWillUnmount</p>
    <p>{count}</p>
    </div>
  )
}
