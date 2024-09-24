import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';
//import { todo } from '../../../../Week_5/Code/TODoApp/backend/db';

const useTodos =  ()=>{
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos);
      })
  },[])

  return todos;
}
function App() {
  // const [todos,setTodos] = useState([]);
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(res=>{
  //       setTodos(res.data.todos);
  //     })
  // },[])
    const todos = useTodos();
  return(
    <div>
      {todos.map(todo=><Track todo={todo}/>)}
    </div>
  )
//   const [count, setCount] = useState(0)
//   const[render,setRender] = useState(true);

//   useEffect(()=>{
//     setTimeout(() => {
//       setRender(false);
//     }, 5000);
//     },[]); 
//   return (<div>
     
//       {render?<MyComponents/>:<div></div>}
      
//   </div>)
// }

// const FunctionalComponent = ()=>{
//   const [count,setCount] = useState(0);

//   const incrementCount =()=>{
//     setCount(count+1);
//   }
//   return <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//   </div>
// }

// const MyComponents = ()=>{
//   useEffect(()=>{
//     console.log("Component mounted");
//     return ()=>{
//       console.log("Componenet Unmounted")
//     }
//   },[])
//   return <div>
//     From Inside my Component
//   </div>
// }
}
const Track= ({todo})=>{
  return <div>
    {todo.title}
    <br></br>
    {todo.description}
  </div>
}

export default App
