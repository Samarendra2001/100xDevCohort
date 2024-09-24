//import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRendererUglyWay />
    {/* <EvenCountRenderer /> */}
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}
function EvenCountRendererUglyWay (){
  const count = useRecoilValue(countAtom)
  return <div>
    {count %2==0 ? "It is Even ":null}
  </div>
}
function Buttons() {
  //const [count,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  // setCount(count+1)
  // setCount(c=>c+1) in this we are doing get the current value and giving the updated value 
  // in this syntax count does need to be presented over there with set count . basically both these syntax has same output
  //in this below syntax we don't need count .So we will not use [Count,setCount] instead
  //we can use only setCount and for only setCount the recoil syntax will be 
  //"useRecoilState"
  //this is because our App will be more performant 
  //as when we press button component initially it used to render everytime
  //but now inn this syntax only no. will be renderd and button component will not be rerender again and again it only 
  //only render once.

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App