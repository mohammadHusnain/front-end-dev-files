import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  // Hooks : State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

  // let [counter, setCounter] = useState(10);

  // let counter = 5 

//   const addvalue = () => {

//     if (counter < 20) {
//           setCounter(counter+1);
//           console.log("clicked and increased value to", setCounter);
//     }
    
//   };

//   const removevalue = () => {
//     if (counter > 0){
//     setCounter(counter-1);
//     console.log("clicked and decreased value to", setCounter);
//     }
     
//   };

//   return (
//     <>
//       <h1>bhinder aur react</h1>
//       <h2>counter value:{counter}</h2>

//       <button onClick={addvalue}>add value {counter}</button>
//       <br></br>
//       <button onClick={removevalue}>remove value {counter}</button>

//       <p>footer {counter}</p>
//     </>
//   );
// }

const [count , setCount] = useState(0)
const [first, setfirst] = useState(0)
const [color, setcolor] = useState(0)

useEffect(() => {            // apply once when our app is being loaded 
alert('hey welcome to learn useeffect hook') 
}, [])

useEffect(() => {             // we apply when we need change in a particular prop or state
 alert('count was changed')
}, [count])

useEffect(() => {
 alert('first was changed')
}, [first])



  return (
    <>

<Navbar color={"cyan" + " blue"} />

      {/* <Navbar color={"navy " + "blue" + color} /> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}


export default App
