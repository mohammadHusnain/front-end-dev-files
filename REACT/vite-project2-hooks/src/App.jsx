import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Hooks : State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

  let [counter, setCounter] = useState(10);

  // let counter = 5 

  const addvalue = () => {

    if (counter < 20) {
          setCounter(counter+1);
          console.log("clicked and increased value to", setCounter);
    }
    
  };

  const removevalue = () => {
    if (counter > 0){
    setCounter(counter-1);
    console.log("clicked and decreased value to", setCounter);
    }
    
  };

  return (
    <>
      <h1>bhinder aur react</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value {counter}</button>

      <p>footer {counter}</p>
    </>
  );
}

export default App
