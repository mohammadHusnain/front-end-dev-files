import { useState, useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// 
function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

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
  //usecallback is for memorisation means its inside cache memory

  //useref hook

  const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  let passwo = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numbersAllowed) string += "0123456789";
  if (charactersAllowed) string += "!@#$%^&*()`";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * string.length); // Corrected line
    passwo += string.charAt(char);
  }

  setPassword(passwo);
}, [length, numbersAllowed, charactersAllowed , setPassword]);

const copyPasswordToClipboard = useCallback(()=>{
  //using useref functionality 
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,999);

window.navigator.clipboard.writeText(password)
} , [password])

useEffect(() => {
  passwordGenerator();
}, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-colors duration-200"
        >
          copy
        </button>
      </div>  

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length:{length} </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberInput"
            onChange={() => {
              setnumbersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charactersAllowed}
            id="characterInput"
            onChange={() => {
              setcharactersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App
