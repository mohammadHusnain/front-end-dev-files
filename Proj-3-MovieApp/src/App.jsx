// when a state change occurs , the entire components is reran or re-rendered, if we dont define states in react the entire data will be vanished on re render and wont update dynamically and should be written from scratch. State in React is like a memory for your components. It lets them remember information and keep track of changes over time. Without state, your components would be "static" (unchanging), like a printed photo—it just shows the same thing forever.

import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './Pages/Home';

const App = () => {

  // const movienumber = 3;

  return (
    <>
      {/* {movienumber === 1 ? (<MovieCard movie={{title: "500 days of summer", release_date: "2008",}}/>) : 
          (<MovieCard movie={{ title: "squid game", release_date: "2025", }} /> )} */}
<Home/>


    </>
  );
}

export default App
