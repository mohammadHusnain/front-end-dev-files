import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourites = () => {

    const {favourites} = useMovieContext();

    if(favourites) {
        return (
          <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid">
              {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}

              {/* key property is important with map */}
            </div>
          </div>
        );
    } 

  return (
    <>
      <div className="favourites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start Adding Movies To Your Favourites And They Will Appear Here</p>
      </div>
    </>
  );
};

export default Favourites;
