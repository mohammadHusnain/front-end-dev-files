import MovieCard from "../components/MovieCard"
import { useState } from "react"

const Home = () =>{

    const [searchQuery , setSearchQuery] = useState(""); // state(searchQuery) and function(setSearchQuery) that updates the state

    const movies = [
        {id:1 , title:"john dick" , release_date: "2021"},
        {id:2 , title:"the matrix" , release_date: "2022"},
        {id:3 , title:"terminator" , release_date: "2023"},
        {id:4 , title:"tiger 3" , release_date: "2025"}
    ] 

const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
};

    return (
      <>
        <div className="home">

<form onSubmit={handleSearch} className="search-form">

    {/* updating state from an input element */}

    <input type="text" placeholder="Search for movies ..." className="search-input" value={searchQuery}  onChange={(e)=> setSearchQuery(e.target.value)}/> 

    <button type="submit" className="Search-button">Search</button>
</form>

          <div className="movies-grid">
            {movies.map((movie) => 
            (
              <MovieCard movie={movie} key={movie.id} />
            ))}

            {/* key property is important with map */}
          </div>
        </div>
      </>
    );
}

export default Home
