import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useQuery } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme/theme';
import MovieCarousel from './components/MovieCarousel/MovieCarousel';
import Skeleton from './components/Skeleton/Skeleton';
import './styles/global.scss';
import Navbar from './components/Navbar';
import './css/App.css';
import { MovieProvider } from './contexts/MovieContext';

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const App = () => {
  const [setDarkTheme] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { data: trendingMovies, isLoading: trendingLoading } = useQuery(
    'trending',
    () => fetchMovies('/trending/movie/week')
  );

  const { data: topRatedMovies, isLoading: topRatedLoading } = useQuery(
    'topRated',
    () => fetchMovies('/movie/top_rated')
  );

  const { data: popularMovies, isLoading: popularLoading } = useQuery(
    'popular',
    () => fetchMovies('/movie/popular')
  );

  const handlePlayMovie = (movie) => {
    setSelectedMovie(movie);
    // Video player logic here
  };

  const handleToggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <header className="app-header">
            <nav>
              <div className="logo">Netflix Clone</div>
              <div className="nav-links">
                <button onClick={handleToggleTheme}>Toggle Theme</button>
              </div>
            </nav>
          </header>

          <main className="main-content">
            {trendingLoading ? (
              <Skeleton count={6} />
            ) : (
              <MovieCarousel
                title="Trending Now"
                movies={trendingMovies?.results}
                onPlay={handlePlayMovie}
              />
            )}

            {topRatedLoading ? (
              <Skeleton count={6} />
            ) : (
              <MovieCarousel
                title="Top Rated"
                movies={topRatedMovies?.results}
                onPlay={handlePlayMovie}
              />
            )}

            {popularLoading ? (
              <Skeleton count={6} />
            ) : (
              <MovieCarousel
                title="Popular on Netflix"
                movies={popularMovies?.results}
                onPlay={handlePlayMovie}
              />
            )}
          </main>

          {selectedMovie && (
            <div className="video-player">
              {/* Video player component goes here */}
            </div>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
