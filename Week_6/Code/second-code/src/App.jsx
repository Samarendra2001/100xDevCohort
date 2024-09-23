import { useState } from 'react'
import CardWrapper from './CardWrapper';
import UserefLearning from './UserefLearning';



function App(){
  return <div>
        <CardWrapper>HI there</CardWrapper>
        <UserefLearning></UserefLearning>
  </div>
}
// function App() {
//   const [todos, setTodos] = useState([{
//     id:1,
//     title:"go to gym",
//     description:"from 7-8 am"
//   },{
//     id:2,
//     title:"eating food",
//     description:"from 8-9 am"
//   },{
//     id:3,
//     title:"go to office",
//     description:"from 9-10 am"
//   }])

//   const addTodo = ()=>{
//     setTodos([...todos,{
//       id:Math.random(),
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map(todo=><ToDo key = {todo.id} title ={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }

// const ToDo = ({title,description})=>{
//   return (<div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//   </div>)

// }

export default App;
