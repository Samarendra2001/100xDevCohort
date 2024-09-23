import { useState } from 'react'


// function App() {
//   const [title, settitle] = useState("Sam")

//   const handleChange = ()=>{
//     settitle("my name is"+ Math.random());
//   }

//   return (
//       <div>
//         <button onClick={handleChange}>Click me to change the title</button>
//         <Header title={title}></Header>
//         <Header title="Barick"></Header>
//       </div>
    
//   )
// }
function App(){
  return (
          <div>
            <HeaderWithButton/>
            <Header title="Barick"></Header>
          </div>
  )
}

// const Header = ({title})=>{
//   return(<div>
//     {title}
//   </div>)
// }

//by wrapping the function inside react.memo also helps misnimise rerendering
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})
//how to fix or minimise rerendering 
//by pushing the state down as in previous the state is defined in app level that means in parent 
//if parent get rendered everythin gets rerendered
//so lets define state not in parent 


const HeaderWithButton = ()=>{
  const [title, settitle] = useState("Sam")

  const handleChange = ()=>{
    settitle("my name is"+ Math.random());
  }
return (
  <div>
    <button onClick={handleChange}>Click me to change the title</button>
    <Header title={title}></Header>
  </div>

)
}
export default App
