import { useState } from 'react'
import './App.css'


// const App = ()=>{
//   const [count,setCount] = useState(0);
//   const onButtonPress = ()=>{
//     setCount(count + 1);
//   }

//   return (<div>
//       <button onClick={onButtonPress}> Counter {count}</button>
//   </div>)
// }


//better code 

const App = ()=>{
  const [count,setCount] =useState(0);
  return (<div>
    <CustomButton count = {count} setCount ={setCount}></CustomButton>
    <CustomButton count = {count} setCount ={setCount }></CustomButton>
    <CustomButton count = {count} setCount ={setCount}></CustomButton>
    <CustomButton count = {count} setCount ={setCount}></CustomButton>
  </div>)
}
const CustomButton =(props)=>{
  function onClickHander(){
   props.setCount(props.count+1);
  }
  return <button onClick={onClickHander}>Counter {props.count}</button>
}
      
export default App;
