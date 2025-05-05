import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCarousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MovieCarousel = ({ title, movies, onPlay }) => {
  return (
    <div className="movie-carousel">
      <h2 className="carousel-title">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1280: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} onPlay={onPlay} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel; 