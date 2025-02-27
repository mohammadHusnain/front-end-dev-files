import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let counter = 5

const addvalue = () =>{
  const cuseState(5)
  {counter+1}

console.log("value added as" , Math.random());

}

  return (
    <>
      <h1>bhinder aur react</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br></br>
      <button>remove value {counter}</button>

      <p>footer {counter}</p>
    </>
  );
}

export default App
