import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //const cachedFn = useCallback(fn, dependencies)

  //Reference
  // useCallback(fn, dependencies)
  // Usage
  // Skipping re-rendering of components
  // Updating state from a memoized callback
  // Preventing an Effect from firing too often
  // Optimizing a custom Hook
  // Troubleshooting
  // Every time my component renders, useCallback returns a different function
  // I need to call useCallback for each list item in a loop, but it’s not allowed

  // using usecallback hook for it, it takes inside function and dependencies , dependencies in form of array

  const passwordGenerator = () => {};

  return (
    <>
      <h1 className="text-4xl text-center text-white">password generator</h1>
    </>
  );
}

export default App
