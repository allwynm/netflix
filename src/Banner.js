import React, { useState, useEffect } from 'react';
import API from './API';
import requests from './request';
import './banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      const response = await API.get(requests.fetchNetflixOrginals);
      let movies = response.data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }
    getMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  console.log(movie);
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
      }}
    >
      <div className='banner__body'>
        <div className='banner_title'>
          {movie?.name || movie?.title || movie?.original_name}
        </div>
        <div className='banner__buttongroup'>
          <button className='banner__btn'>Play</button>
          <button className='banner__btn'>My list</button>
        </div>
        <div className='banner__desc'>{truncate(movie.overview, 250)}</div>
      </div>
      <div className='banner__fadebottom'></div>
    </header>
  );
}

export default Banner;
