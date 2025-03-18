import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("husnain")
  const [form, setForm] = useState({email:"" , phone:""})

const clickme = () =>{
  alert("i am clicked on hover")
}

const onclick = () => {
  alert("i am clicked onclick");
};

const handlechange = (e) =>{
  // setName(e.target.value)
  setForm({...form , [e.target.name ]: e.target.value})
  console.log(form);
  
}

  return (
    <>
      <h3>hello</h3>
      <button onMouseOver={clickme}>Click ME!</button> <br />
      <br />
      <button onClick={onclick}>Click ME!</button> <br />
      <br />

      <input type="text" name='email' value={form.email}  onChange={handlechange}/> <br />
      <input type="text" name='phone' value={form.phone}  onChange={handlechange}/>

    </>
  );
}

export default App
