import MovieCard from "../components/MovieCard"

const Home = () =>{
    const movies = [
        {id:1 , title:"john dick" , release_date: "2021"},
        {id:2 , title:"the matrix" , release_date: "2022"},
        {id:3 , title:"terminator" , release_date: "2023"},
        {id:4 , title:"tiger 3" , release_date: "2025"}
    ] 

    return (
      <>
        <div className="home">
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
            {/* key property is important with map */}
          </div>
        </div>
      </>
    );
}

export default Home
