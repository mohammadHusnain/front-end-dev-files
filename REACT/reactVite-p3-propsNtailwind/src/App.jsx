import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardName from './components/cardname'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let user = {
    name:"hussnain ch",
    age:21,
    email:'husnainbhinder@gmail.com'
  }

    return (
    <>
      {/* Gradient background with CardName component */}
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <CardName name={user.name} age={user.age} email={user.email} />
      </div>

      {/* Additional content */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-6 text-center">
        Tailwind CSS
      </h1>

      {/* Card components */}
      <Card
        startTitle="Welcome to Episode 1"
        mainTitle="React Podcast 1st Episode"
      />
      <br />
      <Card
        startTitle="Welcome to Episode 2"
        mainTitle="React Podcast 2nd Episode"
      />
    </>
  );
}

export default App
