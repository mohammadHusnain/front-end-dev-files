import React from "react" 
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import useStore from '../../store/useStore';  // Remove the curly braces

const MovieCard = ({movie}) => {

    const { isFavourite , addToFavourites , removeFromFavourites} = useMovieContext();
    const favourite = isFavourite(movie.id)

    function onfavourite (e){
        e.preventDefault();
         if (favourite) removeFromFavourites(movie.id);
            else addToFavourites(movie);
    }

return (
  <>
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={onfavourite}
          >
            {favourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  </>
);
}

 export default MovieCard



