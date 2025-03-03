import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name:"hussnain ch",
    age:21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-6 ">
        {" "}
        tailwind css{" "}
      </h1>

      <Card
        startTitle="welcome to episode 1"
        mainTitle="react podcast 1st episode "
      />
      <Card
        startTitle="welcome to episode 2"
        mainTitle="react podcast 2nd episode "
      />
    </>
  );
}

export default App
