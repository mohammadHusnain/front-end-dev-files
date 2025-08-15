import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import './MovieCard.scss';

const MovieCard = ({ movie, onPlay }) => {
  return (
    <Card className="movie-card">
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <div className="movie-overlay">
        <div className="movie-actions">
          <IconButton
            className="play-button"
            onClick={() => onPlay(movie)}
            aria-label="play"
          >
            <PlayArrow />
          </IconButton>
        </div>
        <CardContent className="movie-info">
          <Typography variant="h6" component="div" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.vote_average.toFixed(1)}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieCard;
