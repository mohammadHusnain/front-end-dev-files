import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { useEffect } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // state(searchQuery) and function(setSearchQuery) that updates the state
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed To Search Movies ... ");
    } finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          {/* updating state from an input element */}

          <input
            type="text"
            placeholder="Search for movies ..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" className="Search-button">
            Search
          </button>
        </form>

        {error && <div className="error-meassage">{error}</div>}

        {/* conditional rendering is dine here on loading */}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}

            {/* key property is important with map */}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
