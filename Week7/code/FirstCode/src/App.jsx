import {lazy} from 'react'
//import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
const Dashboard =lazy(()=>import("./components/Dashboard"))
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path = "/dashboard" element = {
            <Dashboard />
            } />
          <Route path = "/landing" element = {<Landing />} />
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}
const Appbar = ()=>{
    const navigate = useNavigate();
   return <div>
      {/* <div style={{background:"blue",color:"white"}}>
        Hi this is the top Bar
      </div> */}
      <div>
        <button onClick={()=>{
          //window.location.href = '/landing'
          navigate("/landing")
        }}>Landing page</button>
      </div>
        <button onClick={()=>{
          //window.location.href = '/dashboard'
          navigate("/dashboard")
        }}>Dashboard page</button>
      </div>
  
}

export default App
