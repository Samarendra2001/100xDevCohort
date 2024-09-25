import './App.css'
import { RecoilRoot, useSetRecoilState,useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';
// import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}


function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id:"2",
        title:"NewTodo",
        description:"NewDescription"
      })
    },5000)
  },[])
  return <div></div>
}
function Todo({id}) {
   const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <div>
      {currentTodo.title} <br />
      {currentTodo.description}
    </div>
      
      
    
  )
}

export default App