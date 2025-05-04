// when a state change occurs , the entire components is reran or re-rendered, if we dont define states in react the entire data will be vanished on re render and wont update dynamically and should be written from scratch. State in React is like a memory for your components. It lets them remember information and keep track of changes over time. Without state, your components would be "static" (unchanging), like a printed photo—it just shows the same thing forever.

import React from 'react'
import MovieCard from './components/MovieCard'
import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Navbar from './components/Navbar';
import "./css/App.css"

const App = () => {

  return (
    <>
      {/* {movienumber === 1 ? (<MovieCard movie={{title: "500 days of summer", release_date: "2008",}}/>) : 
          (<MovieCard movie={{ title: "squid game", release_date: "2025", }} /> )} */}
      {/* <Home/> */}

      <div>
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favourites" element={<Favourites />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App
